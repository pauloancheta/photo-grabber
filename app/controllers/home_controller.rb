class HomeController < ApplicationController
  def index
    access_token = "233483179.f9c78cf.7e493e9b2fba4f5c8062c88d2da896b0"
    client = Instagram.client(access_token: access_token)
    default_search = client.tag_search('foodporn')

    @results = client.tag_recent_media(default_search.first.name)
  end
end