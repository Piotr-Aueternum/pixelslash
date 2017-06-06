import * as c from '../constans/actions';

export const userRegister = payload => ({
  type: c.USER_REGISTER,
  payload,
});

export const userLogged = () => ({
  type: c.USER_LOGGED_IN,
});

export const userAsyncRegister = payload => ({
  type: c.USER_ASYNC_REGISTER,
  payload,
});

export const updateUserData = payload => ({
  type: c.UPDATE_DATA,
  payload,
});
