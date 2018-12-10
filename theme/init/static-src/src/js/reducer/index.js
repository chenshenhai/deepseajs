import { combineReducers } from 'redux';
import todos from './mixins/todos';
import language from './mixins/language';

const rootReducer = combineReducers({
  todos,
  language
});

export default rootReducer;
