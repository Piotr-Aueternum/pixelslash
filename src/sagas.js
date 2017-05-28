import { put, all, call, takeEvery } from 'redux-saga/effects';
import { fetchStats, userRegister } from './services';
import * as c from './constans/actions';

export function* fetchStatsSaga() {
  const payload = yield call(fetchStats);
  yield put({
    type: c.FETCH_STATS,
    payload,
  });
}

export function* userRegisterSaga(action) {
  const payload = yield call(userRegister, action.payload);
  yield put({
    type: c.USER_REGISTER,
    payload,
  });
}

function* fetchStatsWatch(action) {
  yield takeEvery(c.FETCH_ASYNC_STATS, fetchStatsSaga, action);
}

function* userRegisterWatch() {
  yield takeEvery(c.USER_ASYNC_REGISTER, userRegisterSaga);
}

export default function* rootSaga() {
  yield all([
    fetchStatsWatch(),
    userRegisterWatch(),
  ]);
}
