class Api::TagsController < ApplicationController

  def new
    @tag = Tag.new
  end

  def show
    @tag = current_user.tags.find_by(tag_name: params[:tag_name])
  end

  def index
    @tags = current_user.tags
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.author = current_user
    if @tag.save
      render :show
    else
      @errors = @tag.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def update
    @tag = current_user.tags.find_by(tag_name: params[:tag_name])
   if @tag.update_attributes(tag_params)
     render :show
   else
     @errors = @tag.errors.full_messages
     render json: @errors, status: 422
   end
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
    render :show
  end

  private

  def tag_params
    params.require(:tag).permit(:tag_name)
  end
end
