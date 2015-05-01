class SessionsController < ApplicationController
  def create
    request.env['omniauth.auth']
    redirect_to Instagram.authorize_url(:client_id => 'f9c78cfd275943e1aa93165e83ee13e3',
                                        :redirect_uri => 'https://pbandj2015.herokuapp.com')
  end

  def insta_callback
    response = Instagram.get_access_token(params[:code], :redirect_uri => ENV["REDIRECT_URI"])
    session[:access_token] = response.access_token
    redirect_to root_path
  end
end