import { combineReducers } from 'redux';
import todos from './mixins/todos';

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
