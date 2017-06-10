import * as p from '../constans/pixelslash';
import Api from '../api_client';

const url = p.url;
export function getStats() {
  return Api.init({
    url,
    pathname: p.getStats,
  });
}

export function requestAttack() {
  return Api.init({
    url,
    pathname: p.attack,
  });
}

export function postRegisterData(query) {
  return Api.init({
    url,
    pathname: p.register,
    query,
  });
}

export function postLoginData(query) {
  return Api.init({
    url,
    pathname: p.login,
    query,
  });
}

export function getUserData() {
  return Api.init({
    url,
    pathname: p.login,
  });
}

export function logout() {
  return Api.init({
    url,
    pathname: p.logout,
  });
}

export function logged() {
  return Api.init({
    url,
    pathname: p.logged,
  });
}

