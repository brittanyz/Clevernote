class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
    )
    if @user
      login(@user)
      render :show
    else
      @errors = ["Invalid credentials"]
      render json: @errors, status: 422
    end
  end

  def destroy

    if logged_in?
      logout
      render json: nil
    else
      @errors = ["You are not logged in"]
      render json: @errors, status: 422
    end
  end

end
