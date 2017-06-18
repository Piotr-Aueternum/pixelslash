import * as p from '../constans/pixelslash';
import Api from '../api_client';

const url = p.url;
export default function requestAttack() {
  return Api.init({
    url,
    pathname: p.attack,
  });
}
