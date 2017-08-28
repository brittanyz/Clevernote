export const createNotebook = (notebookData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/notebooks',
    data: { notebook: notebookData },
  });
};

export const editNotebook = (notebookData) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/notebooks/${notebookData.id}`,
    data: { notebook: notebookData }
  });
};

export const deleteNotebook = (notebookId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/notebooks/${notebookId}`,
  });
};

export const fetchNotebooks = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notebooks',
  });
};

export const fetchNotebook = (notebookId) => {
  return $.ajax({
    method: 'GET',
    url: `api/notebooks/${notebookId}`,
  });
};
