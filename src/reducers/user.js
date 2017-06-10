import * as c from '../constans/actions';

const inputs = [{
  name: 'user', value: '', required: 'required', minLength: '3', 'data-attached': ['login', 'register'],
}, {
  name: 'password', value: '', type: 'password', required: 'required', minLength: '4', 'data-attached': ['login', 'register'],
}, {
  name: 'password_2', value: '', type: 'password', required: 'required', minLength: '4', 'data-attached': ['register'],
}];
/**
 * Returns new array with changed input value, based on inputs name.
 * @param {Array<object>} arr
 * @param {object} action
 * @return {Array<object>}
 */
const setInputValue = (arr, action) => {
  const array = [...arr];
  array.map((item) => {
    if (item.name === action.payload.name) {
      item.value = action.payload.value;
    }
    return item;
  });
  return array;
};
export default function data(state = {
  inputs,
  logged: false,
  loading: false,
}, action) {
  switch (action.type) {
    case c.UPDATE_DATA: {
      return { ...state, inputs: setInputValue(state.inputs, action) };
    }
    case c.SIGN_REQUEST:
      return { ...state, loading: true };
    case c.USER_SIGN: {
      if (action.payload.status === 'success') {
        return { ...state, logged: true, loading: false };
      }
      return { ...state, logged: false, loading: false };
    }
    case c.LOGOUT: {
      return { ...state, logged: action.payload.logged };
    }
    case c.LOGGED: {
      return { ...state, logged: action.payload.logged };
    }
    default:
      return state;
  }
}
