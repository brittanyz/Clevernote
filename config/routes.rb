Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :notes do
      post :add_tag, on: :member
    end
    resources :notebooks
    resources :tags
  end
end
