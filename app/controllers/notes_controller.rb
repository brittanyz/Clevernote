class NotesController < ApplicationController

  def new
    @note = Note.new
  end

  def create
    @note = Note.new(note_params)
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

  def update
  end

  def index
    @notes = Notes.all
  end

  def show
  end

  def destroy
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :notebook_id)
  end

end
