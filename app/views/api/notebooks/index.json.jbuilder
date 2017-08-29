@notebooks.each do |notebook|
  json.set! notebook.id do
    json.partial!("/api/notebooks/notebooks", notebook: notebook)
  end
end
