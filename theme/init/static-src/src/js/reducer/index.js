import { combineReducers } from 'redux';
import todos from './mixins/todos';
import language from './mixins/language';
import serverConfig from './mixins/server-config';

const rootReducer = combineReducers({
  todos,
  language,
  serverConfig
});

export default rootReducer;
