import React from 'react';
import { Form, Select, Radio, Input, message } from 'antd';
import { connect } from 'react-redux';

const Option = Select.Option;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};

class Module extends React.Component {
  onChangeStorageType (e) {
    const { dispatch } = this.props;
    dispatch({
      type: 'SET_STORAGE_TYPE',
      storageType: e.target.value
    });
  }
  onChangeServerPortalPort (e) {
    const { dispatch, serverConfig } = this.props;
    const portalPort = e.target.value;
    const dashboardPort = serverConfig.serverConfig.dashboard.port;
    if (!(portalPort * 1 > 0)) {
      message.error('Port must be a number');
      return;
    }
    if (portalPort === dashboardPort) {
      message.error('Dashboard and portal ports cannot be the same');
      return;
    }
    dispatch({
      type: 'SET_SERVER_CONFIG_PORTAL_PORT',
      portalPort: portalPort
    });
  }
  onChangeServerDashboardPort (e) {
    const { dispatch, serverConfig } = this.props;
    const portalPort = serverConfig.serverConfig.portal.port;
    const dashboardPort = e.target.value;
    if (!(dashboardPort * 1 > 0)) {
      message.error('Port must be a number');
      return;
    }
    if (portalPort === dashboardPort) {
      message.error('Dashboard and portal ports cannot be the same');
      return;
    }
    dispatch({
      type: 'SET_SERVER_CONFIG_DASHBOARD_PORT',
      dashboardPort: dashboardPort
    });
  }

  onChangeMysqlLocalhost (e) {
    const { dispatch } = this.props;
    const mysqlLocalhost = e.target.value;
    dispatch({
      type: 'SET_MYSQL_CONFIG_LOCALHOST',
      mysqlLocalhost: mysqlLocalhost
    });
  }

  onChangeMysqlPort (e) {
    const { dispatch } = this.props;
    const mysqlPort = e.target.value;
    dispatch({
      type: 'SET_MYSQL_CONFIG_PORT',
      mysqlPort: mysqlPort
    });
  }

  onChangeMysqlUsername (e) {
    const { dispatch } = this.props;
    const mysqlUsername = e.target.value;
    dispatch({
      type: 'SET_MYSQL_CONFIG_USERNAME',
      mysqlUsername: mysqlUsername
    });
  }

  onChangeMysqlPassword (e) {
    const { dispatch } = this.props;
    const mysqlPassword = e.target.value;
    dispatch({
      type: 'SET_MYSQL_CONFIG_PASSWORD',
      mysqlPassword: mysqlPassword
    });
  }

  onChangeMysqlDatabase (e) {
    const { dispatch } = this.props;
    const mysqlDatabase = e.target.value;
    dispatch({
      type: 'SET_MYSQL_CONFIG_DATABASE',
      mysqlDatabase: mysqlDatabase
    });
  }

  render () {
    const { language, serverConfig } = this.props;
    const { textMap } = language;
    const { storageType, fileStorageConfig = {}, mysqlConfig = {} } = serverConfig;
    const { dashboard, portal } = serverConfig.serverConfig || {};
    return (
      <div>
        <Form style={{ width: '720', margin: 'auto' }}>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SERVER_CONFIG_STORAGE_TYPE}</span>} >
            <Radio.Group value={storageType} buttonStyle="solid"
              onChange={this.onChangeStorageType.bind(this)}>
              <Radio.Button value="fileStorage">{textMap.SERVER_CONFIG_STORAGE_TYPE_FILE_STORAGE}</Radio.Button>
              <Radio.Button value="mysql">{textMap.SERVER_CONFIG_STORAGE_TYPE_MYSQL}</Radio.Button>
            </Radio.Group>
          </FormItem>
          {storageType === 'fileStorage' &&
          (<FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SERVER_CONFIG_FILE_STORAGE_PATH}</span>} >
            <Input placeholder="File storage path" value={fileStorageConfig.baseDir} disabled={true} />
          </FormItem>
          )}
          {storageType === 'mysql' &&
          (<FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SERVER_CONFIG_MYSQL_LOCALHOST}</span>} >
            <Input
              style={{ width: '160px' }}
              placeholder="MySQL localhost"
              value={mysqlConfig.localhost}
              onChange={this.onChangeMysqlLocalhost.bind(this)} />
          </FormItem>)}
          {storageType === 'mysql' &&
          (<FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SERVER_CONFIG_MYSQL_PORT}</span>} >
            <Input
              style={{ width: '160px' }}
              placeholder="MySQL port"
              value={mysqlConfig.port}
              onChange={this.onChangeMysqlPort.bind(this)} />
          </FormItem>)}
          {storageType === 'mysql' &&
          (<FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px', width: '120px' }}>{textMap.SERVER_CONFIG_MYSQL_USERNAME}</span>} >
            <Input
              style={{ width: '160px' }}
              placeholder="MySQL username"
              value={mysqlConfig.username}
              onChange={this.onChangeMysqlUsername.bind(this)} />
          </FormItem>)}
          {storageType === 'mysql' &&
          (<FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SERVER_CONFIG_MYSQL_PASSWORD}</span>} >
            <Input
              style={{ width: '200px' }}
              placeholder="MySQL password"
              value={mysqlConfig.password}
              onChange={this.onChangeMysqlPassword.bind(this)}/>
          </FormItem>)}
          {storageType === 'mysql' &&
          (<FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SERVER_CONFIG_MYSQL_DATABASE}</span>} >
            <Input
              style={{ width: '200px' }}
              placeholder="MySQL database"
              value={mysqlConfig.database}
              onChange={this.onChangeMysqlDatabase.bind(this)} />
          </FormItem>)}
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SERVER_CONFIG_DASHBOARD_SERVER_PORT}</span>} >
            <Input
              value={dashboard.port || ''}
              style={{ width: '200px' }}
              placeholder="Dashboard server port"
              maxLength="4"
              minLength="4"
              onChange={this.onChangeServerDashboardPort.bind(this)} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SERVER_CONFIG_PORTAL_SERVER_PORT}</span>} >
            <Input
              value={portal.port || ''}
              style={{ width: '200px' }}
              placeholder="Portal server port"
              maxLength="4"
              minLength="4"
              onChange={this.onChangeServerPortalPort.bind(this)} />
          </FormItem>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
    serverConfig: state.serverConfig
  };
};
export default connect(mapStateToProps)(Module);
