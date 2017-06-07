import axios from 'axios';

export default {
  init: ({ url, pathname = '', headers, query = {}, method = 'get', credentials = 'same-origin', mode = 'no-cors' }) => new Promise((resolve) => {
    const fetchUrl = new window.URL(url);
    fetchUrl.pathname = pathname;
    const search = [];
    Object.keys(query).forEach((key) => {
      search.push(`${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`);
    });
    fetchUrl.search = search.join('&');
    axios.get(fetchUrl, {
      method,
      credentials,
      mode,
      headers,
    })
    .then(result => resolve(result.data));
  }),
};
