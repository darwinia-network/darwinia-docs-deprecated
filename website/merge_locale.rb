# This will use source json as landscape map
# create target locale file if not existed
# or write new keys into the target file while 
# keep existed keys as is

require 'json'

src_file = './i18n/en.json'
tgt_file = './i18n/zh-CN.json'

src = JSON.parse(File.read(src_file))
tgt = JSON.parse(File.read(tgt_file)) rescue JSON["{}"]
dict = src.merge(tgt)

# remove _comment node
dict.delete("_comment")

# make it pretty
pretty_json = JSON.pretty_generate dict

# write to disk
File.open(tgt_file, "w") { |f| 
  f.write(pretty_json)
  puts "SUCCESS: #{tgt_file}"
}