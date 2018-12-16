import {
  SET_ADMIN_USERNAME,
  SET_ADMIN_PASSWORD,
  SET_ADMIN_CONFIRM_PASSWORD
} from '../action/super-admin';

function todos (state = {}, action) {
  switch (action.type) {
    case SET_ADMIN_USERNAME:
      return {
        ...state,
        ...{
          password: action.username
        }
      };
    case SET_ADMIN_PASSWORD:
      return {
        ...state,
        ...{
          password: action.password
        }
      };
    case SET_ADMIN_CONFIRM_PASSWORD:
      return {
        ...state,
        ...{
          confirmPassword: action.confirmPassword
        }
      };
    default:
      return state;
  }
};

export default todos;
