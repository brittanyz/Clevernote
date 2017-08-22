export const signup = (userData) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user: userData },
  });
};
