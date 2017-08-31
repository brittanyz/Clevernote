@notebooks.each do |notebook|
  json.set! notebook.id do
    json.extract!(notebook, :id, :title, :author_id)
    json.notes notebook.notes
    json.noteCount notebook.notes.count
  end
end
