import { FETCH_RESOURCES } from '../constans/actions';

export default (state = { data: [] }, action) => {
  switch (action.type) {
    case FETCH_RESOURCES:
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
};
