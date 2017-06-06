export default {
  init: ({ url, pathname = '', query = [], headers, method = 'get', credentials = 'same-origin', mode = 'no-cors' }) => new Promise((resolve) => {
    const fetchUrl = new window.URL(url);
    fetchUrl.pathname = pathname;
    const search = [];
    Object.keys(query).forEach((key) => {
      search.push(`${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`);
    });
    fetchUrl.search = search.join('&');
    fetch(fetchUrl, {
      method,
      credentials,
      mode,
      headers,
    })
    .then(response => response.json())
    .then(data => resolve(data));
  }),
};
