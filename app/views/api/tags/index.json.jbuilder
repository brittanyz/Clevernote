@tags.each do |tag|
  json.set! tag.id do
    json.extract!(tag, :id, :tag_name, :author)
    json.noteCount tag.notes.count
  end
end
