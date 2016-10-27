Rails.application.routes.draw do
  resources :users
  resources :dashboards
  resources :contacts

  root 'users#login'

  post '/login' => 'users#login'
  get '/login' => 'users#login'
  post '/logout' => 'users#logout'
  get '/logout' => 'users#logout'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
