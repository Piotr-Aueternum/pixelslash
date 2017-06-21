import * as p from '../constans/pixelslash';
import Api from '../api_client';

const url = p.url;
export function getStats() {
  return Api.init({
    url,
    pathname: p.getStats,
  });
}

export function getEnemyStats() {
  return Api.init({
    url,
    pathname: p.getStats,
  });
}
