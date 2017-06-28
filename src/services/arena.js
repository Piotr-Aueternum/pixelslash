import * as p from '../constans/pixelslash';
import Api from '../api_client';

const url = p.url;
export const oponnentsList = () => Api.init({
  url,
  pathname: p.oponnentsList,
});

export default { oponnentsList };
