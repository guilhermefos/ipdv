import { combineReducers } from 'redux';

import hero from './hero';
import header from './header';
import feature from './feature';
import testimony from './testimony';
import partners from './partners';
import idealizers from './idealizers';
import chimp from './chimp';
import curso from './classes';

const reducer = combineReducers({
  hero,
  header,
  feature,
  testimony,
  partners,
  idealizers,
  chimp,
  curso
});

export default reducer;
