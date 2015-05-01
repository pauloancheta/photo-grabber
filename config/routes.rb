Rails.application.routes.draw do
  root 'home#index'
  get '/oauth/connect' => 'sessions#create'
  # get '/oauth/callback' => 'sessions#create'
end
