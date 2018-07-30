export const Actions = {
  FETCH_POSTS: 'FETCH_POSTS'
};

export const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
export const API_KEY = `?key=${process.env.API_KEY}`;

export function fetchPosts() {
  const request = fetch(`${ROOT_URL}/posts${API_KEY}`).then(response => response.json());
  return {
    type: Actions.FETCH_POSTS,
    payload: request
  };
}
