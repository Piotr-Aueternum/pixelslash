import * as p from '../constans/pixelslash';
import Api from '../api_client';

const url = p.url;
export default function getStats() {
  return Api.init({
    url,
    pathname: p.getStats,
  });
}
