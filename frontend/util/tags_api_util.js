export const createTag = (tagData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/tags',
    data: { tag: tagData },
  });
};

export const editTag = (tagData) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tags/${tagData.id}`,
    data: { tag: tagData },
  });
};

export const deleteTag = (tagId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tags/${tagId}`,
  });
};

export const fetchTags = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/tags',
  });
};

export const fetchTag = (tagId) => {
  return $.ajax({
    method: 'GET',
    url: `api/tags/${tagId}`,
  });
};
