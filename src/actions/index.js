export const Actions = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
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

export function createPost(values, callback) {
  const request = fetch(`${ROOT_URL}/posts${API_KEY}`, {
    method: 'post',
    body: JSON.stringify(values),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(callback);
  return {
    type: Actions.CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = fetch(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => response.json());
  return {
    type: Actions.FETCH_POST,
    payload: request
  };
}
