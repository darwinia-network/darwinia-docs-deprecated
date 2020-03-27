# This will use source json as landscape map
# create target locale file if not existed
# or write new keys into the target file while 
# keep existed keys as is

# also fix locale entries in articles' header meta
# sidebar_label, title, custom_edit_url, etc

require 'json'
require 'active_support'
require 'pry'

src_file = './i18n/en.json'
tgt_file = './i18n/zh-CN.json'
doc_dir  = '../content/zh-CN'

src = JSON.parse(File.read(src_file))
tgt = JSON.parse(File.read(tgt_file)) rescue JSON["{}"]
dict = src.deep_merge(tgt)

# remove _comment node
dict.delete("_comment")

# update locale header translation
Dir.entries("#{doc_dir}").select { |f| 
  next if File.directory? File.join(doc_dir, f)

  content = File.read File.join(doc_dir, f)

  # skip if no head metadata available
  next unless content.include?("---\n")
  
  tmp = content.split("---\n") 
  tmp.shift
  info = tmp.shift

  id            = info.scan(/id:\s*(.+)$/).join
  title         = info.scan(/title:\s*(.+)$/).join
  sidebar_label = info.scan(/sidebar_label:\s*(.+)$/).join

  # skip if no translation needed
  next if title.empty? and sidebar_label.empty?

  leaf = dict["localized-strings"]["docs"][id]
  unless leaf.nil?
    leaf["title"] = title.to_s
    leaf["sidebar_label"] = sidebar_label.to_s
  end
}

# make it pretty
pretty_json = JSON.pretty_generate dict

# write to disk
File.open(tgt_file, "w") { |f| 
  f.write(pretty_json)
  puts "SUCCESS: #{tgt_file}"
}