export default {
  init: ({ address, pathname = '', query = [], headers }) => new Promise((resolve) => {
    const url = new window.URL(address);
    url.pathname = pathname;
    const search = [];
    Object.keys(query).forEach((key) => {
      search.push(`${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`);
    });
    url.search = search.join('&');
    fetch(url, {
      method: 'get',
      headers,
    })
    .then(response => response.json())
    .then(data => resolve(data));
  }),
};
