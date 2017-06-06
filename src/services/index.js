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

export function postUserData(query) {
  return Api.init({
    url,
    pathname: p.register,
    query,
  });
}

export function getUserData() {
  return Api.init({
    url,
    pathname: p.login,
  });
}
