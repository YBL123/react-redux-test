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

export const fetchComplete = () => {
  return {
    type: 'posts/fetched',
    payload: true,
  };
};

export const processResult = () => {
  return {
    type: 'posts/processResult',
    payload: null,
  };
};
