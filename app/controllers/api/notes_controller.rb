class Api::NotesController < ApplicationController

  def new
    @note = Note.new
  end

  def create
    @note = Note.new(note_params)
    # if current_user.notebooks.exists?(id: @note.notebook_id) && @note.save
    #   render :show
    if @note.notebook_id == nil
      @note.notebook_id = current_user.default_notebook_id
    end
    if @note.save
      render :show
    else
      @errors = @note.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def edit
    @note = Note.find_by(params[:id])
  end

  def add_tag
    Tagging.create(note_id: params[:id], tag_id: params[:tagId])
    @note = Note.find(params[:id])
    render :show
  end

  def remove_tag
    @tag = Tag.find(params[:tagId])
    @note = Note.find(params[:noteId])
    @note.tag_ids.delete(@tag.id)
  end

  def update
    @note = Note.find(params[:id])
    if current_user.notebooks.exists?(id: @note.notebook_id) && @note.update(note_params)
      render :show
    else
      @errors = @note.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def index
    @notes = current_user.notes
  end

  def show
    @note = Note.find(params[:id])
  end

  def destroy
    @note = Note.find(params[:id])
    if @note.destroy
      render :delete
    else
      @errors = @note.errors.full_messages
      render json: @errors, status: 422
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :notebook_id, tag_ids: [])
  end

end

# take notebook id from params and uncomment in create
