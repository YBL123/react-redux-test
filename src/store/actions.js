export const updatePosts = (data) => {
  return {
    type: 'posts/update',
    payload: data,
  };
};

export const deletePost = (id) => {
  return {
    type: 'posts/deleteSingle',
    payload: id,
  };
};
