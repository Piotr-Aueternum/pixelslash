import * as c from '../constans/actions';

export const fetchStats = payload => ({
  type: c.FETCH_STATS,
  payload,
});

export const fetchAsyncStats = () => ({
  type: c.FETCH_ASYNC_STATS,
});
