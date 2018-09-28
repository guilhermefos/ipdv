import { combineReducers } from 'redux';

import hero from './hero';
import header from './header';
import feature from './feature';
import testimony from './testimony';

const reducer = combineReducers({
  hero,
  header,
  feature,
  testimony
});

export default reducer;
