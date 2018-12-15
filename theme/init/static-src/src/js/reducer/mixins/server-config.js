import {
  SET_STORAGE_TYPE,
  SET_FILE_STORAGE_CONFIG,
  SET_MYSQL_CONFIG,
  SET_SERVER_CONFIG
} from '../action/server-config';

const defaultState = {
  storageType: 'fileStorage', // 'fileStorage' | 'MySQL'
  fileStorageConfig: {
    'baseDir': ''
  },
  mysqlConfig: {
    userName: '',
    password: '',
    port: '',
    localhost: '127.0.0.1'
  },
  serverConfig: {
    dashboard: {
      port: '3001'
    },
    portal: {
      port: '3000'
    }
  }
};

function todos (state = defaultState, action) {
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
