import {
  SET_STORAGE_TYPE,
  SET_FILE_STORAGE_CONFIG,
  SET_MYSQL_CONFIG,
  SET_SERVER_CONFIG
} from '../action/todos';

/*
  {
    storageType: '', // 'fileStorage' | 'MySQL'
    fileStorageConfig: {
      'baseDir': ''
    },
    mysqlConfig: {
      userName: '',
      password: '',
      port: '',
      localhost: ''
    },
    serverConfig: {
      dashboard: {
        port: '3001'
      },
      portal: {
        port: '3002'
      }
    }
  }
*/

function todos (state = {}, action) {
  switch (action.type) {
    case SET_STORAGE_TYPE:
      return {
        ...state,
        ...{
          storageType: action.storageType
        }
      };
    case SET_FILE_STORAGE_CONFIG:
      return {
        ...state,
        ...{
          fileStorageConfig: action.fileStorageConfig
        }
      };
    case SET_MYSQL_CONFIG:
      return {
        ...state,
        ...{
          mysqlConfig: action.mysqlConfig
        }
      };
    case SET_SERVER_CONFIG:
      return {
        ...state,
        ...{
          serverConfig: action.serverConfig
        }
      };
    default:
      return state;
  }
};

export default todos;
