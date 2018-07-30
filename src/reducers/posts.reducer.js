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

    case Actions.DELETE_POST:
      const newState = {...state};
      delete newState[payload];
      return newState;

    default:
      return state;
  }
}
