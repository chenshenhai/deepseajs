import React from 'react';
import { Form, Select } from 'antd';
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
  handleChange (value) {
    const { dispatch } = this.props;
    dispatch({
      type: 'ADD_TODO',
      text: value
    });
  }
  render () {
    return (
      <div className="page-app-container">
        <div className="app-main-content">
          <Form style={{ width: '480px', margin: 'auto' }}>
            <FormItem
              {...formItemLayout}
              label={<span style={{ lineHeight: '30px' }}>请选择语言</span>} >
              <Select defaultValue="zh-cn" style={{ width: 240 }} onChange={this.handleChange.bind(this)}>
                <Option value="en">English</Option>
                <Option value="zh-cn">中文简体</Option>
              </Select>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};
export default connect(mapStateToProps)(Module);
