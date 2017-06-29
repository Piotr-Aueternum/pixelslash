import * as p from '../constans/pixelslash';
import Api from '../api_client';

const url = p.url;
export const getStats = () => Api.init({
  url,
  pathname: p.getStats,
});

export const getEnemyStats = () => Api.init({
  url,
  pathname: p.getStats,
});
