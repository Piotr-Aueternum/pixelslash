import * as c from '../constans/actions';

export const attack = () => ({
  type: c.ATTACK,
});

export const attackAsync = payload => ({
  type: c.ATTACK_ASYNC,
  payload,
});

export const attackRequest = () => ({
  type: c.ATTACK_REQUEST,
});

export const attackAsyncRequest = payload => ({
  type: c.ATTACK_ASYNC_REQUEST,
  payload,
});
