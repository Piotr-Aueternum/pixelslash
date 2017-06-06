import { put, call, takeEvery } from 'redux-saga/effects';
import * as s from './services';
import * as c from './constans/actions';
import a from './actions';

export function* fetchStatsSaga() {
  const payload = yield call(s.getStats);
  yield put(a.fetchStats(payload));
}

export function* userRegisterSaga(action) {
  const payload = yield call(s.postUserData, action.payload);
  yield put(a.userRegister(payload));
}

function* watcher(action) {
  yield takeEvery(c.FETCH_ASYNC_STATS, fetchStatsSaga, action);
  yield takeEvery(c.USER_ASYNC_REGISTER, userRegisterSaga);
}

export default function* rootSaga() {
  yield watcher();
}
