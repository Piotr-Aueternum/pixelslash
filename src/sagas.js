import { put, call, takeEvery } from 'redux-saga/effects';
import * as s from './services';
import * as c from './constans/actions';
import a from './actions';

export function* fetchStats() {
  const payload = yield call(s.getStats);
  yield put(a.fetchStats(payload));
}

export function* userSign(action) {
  const { type, query } = action.payload;
  let payload;
  if (type === 'register') {
    payload = yield call(s.postRegisterData, query);
  }
  if (type === 'login') {
    payload = yield call(s.postLoginData, query);
  }
  yield put(a.userSign(payload));
}

export function* logout() {
  const payload = yield call(s.logout);
  yield put(a.logout(payload));
}

export function* logged() {
  const payload = yield call(s.logged);
  yield put(a.logged(payload));
}

function* watcher(action) {
  yield takeEvery(c.FETCH_ASYNC_STATS, fetchStats, action);
  yield takeEvery(c.USER_ASYNC_SIGN, userSign);
  yield takeEvery(c.ASYNC_LOGOUT, logout);
  yield takeEvery(c.ASYNC_LOGGED, logged);
}

export default function* rootSaga() {
  yield watcher();
}
