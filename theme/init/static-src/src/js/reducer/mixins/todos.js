import { ADD_TODO } from '../action/todos';

function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text
        }
      ];
    default:
      return state;
  }
};

export default todos;
