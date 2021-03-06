import { put, call, takeEvery } from 'redux-saga/effects';
import services from './services';
import * as c from './constans/actions';
import a from './actions';

const { user, stats, arena, attack } = services;

export function* fetchStats() {
  const payload = yield call(stats.getStats);
  yield put(a.fetchStats(payload));
}

export function* attackRequest(action) {
  const { query } = action.payload;
  const payload = yield call(attack.attackRequest, query);
  yield put(a.attackRequest(payload));
}

export function* fetchOponnents() {
  const payload = yield call(arena.oponnentsList);
  yield put(a.fetchArena(payload));
}

export function* userSign(action) {
  const { type, query } = action.payload;
  let payload;
  if (type === 'register') {
    payload = yield call(user.postRegisterData, query);
  }
  if (type === 'login') {
    payload = yield call(user.postLoginData, query);
  }
  yield put(a.userSign(payload));
}

export function* logout() {
  const payload = yield call(user.logout);
  yield put(a.logout(payload));
}

export function* logged() {
  const payload = yield call(user.logged);
  yield put(a.logged(payload));
}

function* watcher(action) {
  yield takeEvery(c.FETCH_ASYNC_STATS, fetchStats, action);
  yield takeEvery(c.FETCH_ASYNC_ARENA, fetchOponnents, action);
  yield takeEvery(c.ATTACK_ASYNC_REQUEST, attackRequest);
  yield takeEvery(c.USER_ASYNC_SIGN, userSign);
  yield takeEvery(c.ASYNC_LOGOUT, logout);
  yield takeEvery(c.ASYNC_LOGGED, logged);
}

export default function* rootSaga() {
  yield watcher();
}
