import pageData from './../../lib/page-data';
import {
  SET_STORAGE_TYPE,
  SET_FILE_STORAGE_CONFIG,
  SET_MYSQL_CONFIG_LOCALHOST,
  SET_MYSQL_CONFIG_PORT,
  SET_MYSQL_CONFIG_USERNAME,
  SET_MYSQL_CONFIG_PASSWORD,
  SET_MYSQL_CONFIG_DATABASE,
  SET_SERVER_CONFIG_DASHBOARD_PORT,
  SET_SERVER_CONFIG_PORTAL_PORT
} from '../action/server-config';

const data = pageData.getAll() || {};
const { fileStoragePath = '' } = data || {};

const defaultState = {
  storageType: 'fileStorage', // 'fileStorage' | 'MySQL'
  fileStorageConfig: {
    baseDir: fileStoragePath
  },
  mysqlConfig: {
    username: '',
    password: '',
    port: '3306',
    localhost: '127.0.0.1',
    database: 'toojs'
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
    case SET_MYSQL_CONFIG_LOCALHOST:
      state.mysqlConfig.localhost = action.mysqlLocalhost;
      return state;
    case SET_MYSQL_CONFIG_PORT:
      state.mysqlConfig.port = action.mysqlPort;
      return state;
    case SET_MYSQL_CONFIG_USERNAME:
      state.mysqlConfig.username = action.mysqlUsername;
      return state;
    case SET_MYSQL_CONFIG_PASSWORD:
      state.mysqlConfig.password = action.mysqlPassword;
      return state;
    case SET_MYSQL_CONFIG_DATABASE:
      state.mysqlConfig.database = action.mysqlDatabase;
      return state;
    case SET_SERVER_CONFIG_DASHBOARD_PORT:
      state.serverConfig.dashboard.port = action.dashboardPort;
      const newDashboardConfig = state.serverConfig;
      return {
        ...state,
        ...{
          serverConfig: newDashboardConfig
        }
      };
    case SET_SERVER_CONFIG_PORTAL_PORT:
      state.serverConfig.portal.port = action.portalPort;
      const newPortalConfig = state.serverConfig;
      return {
        ...state,
        ...{
          serverConfig: newPortalConfig
        }
      };
    default:
      return state;
  }
};

export default todos;
