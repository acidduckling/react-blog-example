export const Actions = {
  FETCH_POSTS: 'FETCH_POSTS',
  CREATE_POST: 'CREATE_POST'
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

export function createPost(values) {
  const request = fetch(`${ROOT_URL}/posts${API_KEY}`, values).then(response => response.json());
  return {
    type: Actions.CREATE_POST,
    payload: request
  }
}
