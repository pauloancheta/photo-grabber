require "instagram"

Instagram.configure do |config|
  config.client_id = ENV["INSTAGRAM_CLIENT"]
  config.access_token = ENV["ACCESS_TOKEN"]
end