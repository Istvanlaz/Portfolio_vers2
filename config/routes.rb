Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#work'
  get 'work', to: 'pages#work'
  get 'about', to: 'pages#about'
  get 'art_work', to: 'pages#art_work'
  get 'contact', to: 'pages#contact'
  # resources :pages
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
