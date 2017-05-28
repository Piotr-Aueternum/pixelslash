import { UPDATE_REGISTER_DATA } from '../constans/actions';

export default function data(state = { login: '', passowrd: '', password_2: '' }, action) {
  switch (action.type) {
    case UPDATE_REGISTER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
