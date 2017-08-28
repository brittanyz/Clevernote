class Api::NotebooksController < ApplicationController
  #
  # def new
  # end

  def create
    @notebook = Notebook.new(notebook_params)
    # @notebook.author = current_user
    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def edit
    @notebook = current_user.notebooks.find(params[:id])
  end

  def update
    @notebook = current_user.notebooks.find_by(id: params[:id])
    if @notebook.update_attributes(notebook_params)
      render :show
    else
      @errors = @note.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def index
    @notebooks = current_user.notebooks
  end

  def show
    @notebook = current_user.notebooks.find(params[:id])
  end

  def destroy
    @notebook = current_user.notebooks.find(params[:id])
    @notebook.destroy
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title, :author_id)
  end
end