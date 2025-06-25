# ruby_bot.rb - Simple Ruby bot
require 'json'

while input = gets
  data = JSON.parse(input)
  message = data["message"]
  reply = { reply: "[Ruby bot] You said: #{message}" }
  puts reply.to_json
  STDOUT.flush
end
