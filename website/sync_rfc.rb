require 'json'
require 'net/http'
require 'pry-nav'

# This script will sync remote rfc repo to local articles in rfc section
# remote rfc repo is pulled through submodule and stored in ./content/.remote_rfc 

@rfc_meta_file = "./.rfc_version"
@rfc_check_api = "https://api.github.com/repos/darwinia-network/rfcs/commits?path=RFC"
@remote_rfc_path = "../content/.remote_rfc"
@content_path = "../content"

def fetch(uri_str)
  response = Net::HTTP.get_response(URI(uri_str))

  case response
  when Net::HTTPSuccess then
    response.body
  when Net::HTTPRedirection then
    location = response['location']
    warn "redirected to #{location}"
    fetch(location)
  else
    response.body
  end
rescue Error => e
  puts "Fetch failed: #{e}"
end

# get remote rfc repo's latest commit
def remote_commit
  @remote_commit ||= (`git submodule status | cut -d' ' -f2 | tr -d '\n'`).to_s[0..5]
end

# get local recorded and updated commit
def local_commit
  File.read(@rfc_meta_file)
end

def sync_rfcs
  puts "Start to sync rfcs"

  # language files
  sync_locale('en_US', 'en')
  sync_locale('zh_CN', 'zh-CN')

  update_meta_file
end

def sync_locale(src, target)
  puts target
  src_folder = "#{@remote_rfc_path}/RFC/#{src}"
  tgt_folder  = "#{@content_path}/#{target}"

  converted_file_ids = []

  # images
  Dir.entries("#{src_folder}/images").select { |f| 
    next if File.directory? f

    old_file = "#{src_folder}/images/#{f}"
    # prepend rfc-locale to origin
    new_name = "rfc-#{target}-#{f}"
    new_file = "#{tgt_folder}/assets/#{new_name}"

    FileUtils.cp old_file, new_file
  }

  # rfc files
  Dir.entries("#{src_folder}").each do |f| 
    # skip if dir
    next if File.directory? File.join(src_folder, f)

    old_file = "#{src_folder}/#{f}"
    new_file = "#{tgt_folder}/rfc-#{f}"

    # fix images
    # ![alt](images/0001-darwinia.png) => ![alt](assets/rfc-en-0001-darwinia.png)
    # ![alt](https://url_to.jpg) => no change
    content = File.read(old_file)

    # change original meta data into list items
    if content.include?("---\n")
      tmp = content.split("---\n") 
      tmp.shift
      info = tmp.shift
      info.gsub! /^/, '- '
      content = info + tmp.join('')
    end
    
    # remove images/ first
    content.gsub! /(\!.+\]\()((?!http)(.*images\/)(.+))(\.(gif|jpe?g|png|svg))\)/i, "\\1assets/rfc-#{target}-\\4\\5)"

    # fix inter-document links, replace link with document id
    content.gsub! /(\[.+\])(\((?!http)\.\/(\d+.+))(\.md)\)/i, "\\1(./rfc-\\3)" 

    # add header meta data
    title = f.split('.').first.split('-')
    
    # make id consistence with file name to allow raw markdown link work
    id = "rfc-#{title.join('-')}"
    # id = title.shift.to_s
    # id = "rfc-#{id}"
    title = title.map(&:capitalize).join(' ')
    
    meta = %{---
id: #{id}
title: #{title}
sidebar_label: #{title}
custom_edit_url: https://github.com/darwinia-network/rfc/edit/master/RFC/src/#{f}
---

}

    content = "#{meta}#{content}"

    File.open(new_file, 'w'){ |f|
      f.write content
    }

    converted_file_ids.push(id)
  
  end

  puts converted_file_ids.sort
end

# write last_check to meta_file
# TODO
def update_meta_file
  File.open(@rfc_meta_file, "w"){ |f|
    f.write remote_commit
  }
end

if local_commit != remote_commit
  sync_rfcs
else
  puts "No need to update RFC or you should run git submodule update first"
end
