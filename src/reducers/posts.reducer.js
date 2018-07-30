import { Actions } from '../actions';

export default function(state = {}, action) {
  const { payload } = action;
  switch (action.type) {
    case Actions.FETCH_POST:
      return {
        ...state,
        [payload.id]: payload
      };

    case Actions.FETCH_POSTS:
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
