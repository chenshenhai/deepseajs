import React from 'react';
import { Form, Select, Radio, Input } from 'antd';
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
  render () {
    const { language, serverConfig } = this.props;
    const { textMap } = language;
    const { storageType } = serverConfig;
    console.log('serverConfig = ', serverConfig);
    return (
      <div>
        <Form style={{ width: '720', margin: 'auto' }}>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SERVER_CONFIG_STORAGE_TYPE}</span>} >
            <Radio.Group value={storageType} buttonStyle="solid">
              <Radio.Button value="fileStorage">{textMap.SERVER_CONFIG_STORAGE_TYPE_FILE_STORAGE}</Radio.Button>
              <Radio.Button value="mysql">{textMap.SERVER_CONFIG_STORAGE_TYPE_MYSQL}</Radio.Button>
            </Radio.Group>
          </FormItem>
          {storageType === 'fileStorage' &&
          (<FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SERVER_CONFIG_FILE_STORAGE_PATH}</span>} >
            <Input placeholder="File storage path" />
          </FormItem>
          )}
          {storageType !== 'fileStorage' &&
          (<FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SERVER_CONFIG_MYSQL_PORT}</span>} >
            <Input style={{ width: '160px' }} placeholder="MySQL port" />
          </FormItem>)}
          {storageType !== 'fileStorage' &&
          (<FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px', width: '120px' }}>{textMap.SERVER_CONFIG_MYSQL_USERNAME}</span>} >
            <Input style={{ width: '160px' }} placeholder="MySQL username" />
          </FormItem>)}
          {storageType !== 'fileStorage' &&
          (<FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SERVER_CONFIG_MYSQL_PASSWORD}</span>} >
            <Input style={{ width: '160px' }} placeholder="MySQL password" />
          </FormItem>)}
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SERVER_CONFIG_DASHBOARD_SERVER_PORT}</span>} >
            <Input style={{ width: '160px' }} placeholder="Dashboard server port" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SERVER_CONFIG_PORTAL_SERVER_PORT}</span>} >
            <Input style={{ width: '160px' }} placeholder="Portal server port" />
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
