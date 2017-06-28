import * as c from '../constans/actions';

export const fetchArena = payload => ({
  type: c.FETCH_ARENA,
  payload,
});

export const fetchAsyncArena = () => ({
  type: c.FETCH_ASYNC_ARENA,
});
