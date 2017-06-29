import * as stats from './stats';
import * as user from './user';
import * as arena from './arena';
import * as attack from './attack';

export default ({
  ...stats,
  ...user,
  ...arena,
  ...attack,
});
