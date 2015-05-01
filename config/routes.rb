Rails.application.routes.draw do
  root 'home#index'
  get '/oauth/connect' => 'sessions#create'
end
