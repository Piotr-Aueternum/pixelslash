import * as p from '../constans/pixelslash';
import Api from '../api_client';

const url = p.url;

export const postRegisterData = query => Api.init({
  url,
  pathname: p.register,
  query,
});

export const postLoginData = query => Api.init({
  url,
  pathname: p.login,
  query,
});

export const getUserData = () => Api.init({
  url,
  pathname: p.login,
});

export const logout = () => Api.init({
  url,
  pathname: p.logout,
});

export const logged = () => Api.init({
  url,
  pathname: p.logged,
});

