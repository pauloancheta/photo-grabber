class HomeController < ApplicationController
  def index
    @client = remote_ip
  end
end