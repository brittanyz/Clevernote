json.notebook do

  json.extract!(notebook, :id, :title, :author_id, :note_ids)
end

json.notes do
  notebook.notes.each do |note|
    json.set! note.id do

      json.partial!("/api/notes/note", note: note)
    end
  end
end
