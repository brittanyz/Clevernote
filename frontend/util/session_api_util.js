export const login = (userData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user: userData },
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session',
  });
};
