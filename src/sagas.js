import { put, all, call, takeEvery } from 'redux-saga/effects';
import { fetchStats, userRegister } from './services';

export function* fetchStatsSaga() {
  const payload = yield call(fetchStats);
  yield put({
    type: 'FETCH_STATS',
    payload,
  });
}

export function* userRegisterSaga(action) {
  const payload = yield call(userRegister, action.payload);
  yield put({
    type: 'USER_REGISTER',
    payload,
  });
}

function* fetchStatsWatch(action) {
  yield takeEvery('FETCH_ASYNC_STATS', fetchStatsSaga, action);
}

function* userRegisterWatch() {
  yield takeEvery('USER_ASYNC_REGISTER', userRegisterSaga);
}

export default function* rootSaga() {
  yield all([
    fetchStatsWatch(),
    userRegisterWatch(),
  ]);
}
