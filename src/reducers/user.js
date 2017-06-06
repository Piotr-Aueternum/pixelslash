import * as c from '../constans/actions';

const inputs = [{
  name: 'login', value: '',
}, {
  name: 'password', value: '', type: 'password',
}, {
  name: 'password_2', value: '', type: 'password',
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
}, action) {
  switch (action.type) {
    case c.UPDATE_DATA: {
      return { ...state, inputs: setInputValue(state.inputs, action) };
    }
    case c.USER_REGISTER: {
      if (action.payload.status === 'success') {
        return { login: state.login, logged: true };
      }
      return { ...state, logged: false };
    }
    default:
      return state;
  }
}
