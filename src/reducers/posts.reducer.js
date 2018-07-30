import { Actions } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case Actions.FETCH_POSTS:
      const { payload } = action;
      return payload
        ? payload.reduce((acc, v) => {
            acc[v.id] = v;
            return acc;
          }, {})
        : state;

    default:
      return state;
  }
}
