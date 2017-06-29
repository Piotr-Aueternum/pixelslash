import { FETCH_ARENA } from '../constans/actions';

export default (state = { data: [] }, action) => {
  switch (action.type) {
    case FETCH_ARENA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
