export const updatePosts = (data) => {
  return {
    type: 'posts/update',
    payload: data,
  };
};
