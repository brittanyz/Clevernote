export const createNote = (noteData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/notes',
    data: { note: noteData },
  });
};

export const editNote = (noteData) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/notes/${noteData.id}`,
    data: { note: noteData }
  });
};

export const deleteNote = (noteId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/notes/${noteId}`,
  });
};

export const fetchNotes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notes',
  });
};

export const fetchNote = (noteId) => {
  return $.ajax({
    method: 'GET',
    url: `api/notes/${noteId}`,
  });
};
