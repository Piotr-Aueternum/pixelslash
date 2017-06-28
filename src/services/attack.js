import * as p from '../constans/pixelslash';
import Api from '../api_client';

const url = p.url;
export const attack = () => Api.init({
  url,
  pathname: p.attack,
});

export const attackRequest = query => Api.init({
  url,
  pathname: p.attackRequest,
  query,
});
