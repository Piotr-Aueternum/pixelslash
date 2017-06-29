import { combineReducers } from 'redux';
import resources from './resources';
import stats from './stats';
import user from './user';
import arena from './arena';

export default combineReducers({
  resources,
  stats,
  user,
  arena,
});
