import { Actions } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case Actions.FETCH_POSTS:
      return action.payload.data.reduce((acc, v) => {
        acc[v.id] = v;
        return acc;
      }, {});

    default:
      return state;
  }
}
