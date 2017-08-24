json.array!(@notes) do |note|
  json.partial!("/api/notes/note", notes: @notes)
end
