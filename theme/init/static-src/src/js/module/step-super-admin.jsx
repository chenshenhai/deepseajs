import React from 'react';
import { Form, Select, Input } from 'antd';
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
  onChangeUsername (e) {
    const { dispatch } = this.props;
    const username = e.target.value;
    dispatch({
      type: 'SET_ADMIN_USERNAME',
      username: username
    });
  }

  onChangePassword (e) {
    const { dispatch } = this.props;
    const password = e.target.value;
    dispatch({
      type: 'SET_ADMIN_PASSWORD',
      password: password
    });
  }

  onChangeConfirmPassword (e) {
    const { dispatch } = this.props;
    const confirmPassword = e.target.value;
    dispatch({
      type: 'SET_ADMIN_CONFIRM_PASSWORD',
      confirmPassword: confirmPassword
    });
  }

  render () {
    const { language, superAdmin } = this.props;
    const { textMap, lang } = language;
    return (
      <div>
        <Form style={{ width: '720', margin: 'auto' }}>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SUPER_ADMIN_USERNAME}</span>} >
            <Input
              style={{ width: '240px' }}
              value={superAdmin.username}
              placeholder="username"
              onChange={this.onChangeUsername.bind(this)} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SUPER_ADMIN_PASSWORD}</span>} >
            <Input
              style={{ width: '240px' }}
              type="password"
              value={superAdmin.password}
              placeholder="password"
              onChange={this.onChangePassword.bind(this)} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.SUPER_ADMIN_CONFIRM_PASSWORD}</span>} >
            <Input
              style={{ width: '240px' }}
              type="password"
              value={superAdmin.confirmPassword}
              placeholder="confirm password"
              onChange={this.onChangeConfirmPassword.bind(this)} />
          </FormItem>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
    superAdmin: state.superAdmin
  };
};
export default connect(mapStateToProps)(Module);
