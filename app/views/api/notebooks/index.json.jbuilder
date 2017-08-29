@notebooks.each do |notebook|
  json.set! notebook.id do
    json.extract!(notebook, :id, :title, :author_id)
    json.noteCount notebook.notes.count
  end
end
