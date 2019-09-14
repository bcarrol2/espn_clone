Rails.application.routes.draw do
  resources :users
  root to: 'user#index'
  post '/login', to: 'auth#create' 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
