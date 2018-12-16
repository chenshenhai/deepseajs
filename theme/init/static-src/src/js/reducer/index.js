import { combineReducers } from 'redux';
import todos from './mixins/todos';
import language from './mixins/language';
import serverConfig from './mixins/server-config';
import superAdmin from './mixins/super-admin';

const rootReducer = combineReducers({
  todos,
  language,
  serverConfig,
  superAdmin
});

export default rootReducer;
