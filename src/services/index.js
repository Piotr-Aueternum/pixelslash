import { url, getStats, attack, register, login } from '../constans/pixelslash';
import Api from '../api_client';

export function fetchStats() {
  return Api.init({
    url,
    pathname: getStats,
  });
}

export function requestAttack() {
  return Api.init({
    url,
    pathname: attack,
  });
}
/**
 * Send request to register.
 * @export
 * @param {Array<object>} query
 * @returns {object} JSON
 */
export function userRegister(query) {
  return Api.init({
    url,
    pathname: register,
    query,
  });
}

export function userLogin(query) {
  return Api.init({
    url,
    pathname: login,
    query,
  })
}
