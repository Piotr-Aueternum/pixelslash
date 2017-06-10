import * as c from '../constans/actions';

export const userSign = payload => ({
  type: c.USER_SIGN,
  payload,
});

export const userLogged = () => ({
  type: c.USER_LOGGED_IN,
});

export const userAsyncSign = payload => ({
  type: c.USER_ASYNC_SIGN,
  payload,
});

export const updateUserData = payload => ({
  type: c.UPDATE_DATA,
  payload,
});

export const signRequest = () => ({
  type: c.SIGN_REQUEST,
});

export const logout = payload => ({
  type: c.LOGOUT,
  payload,
});

export const asyncLogout = () => ({
  type: c.ASYNC_LOGOUT,
});

export const logged = () => ({
  type: c.LOGGED,
});
