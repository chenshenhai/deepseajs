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
      type: 'SELECT_LANGUAGE',
      lang: value
    });
  }
  render () {
    const { language } = this.props;
    const { textMap } = language;
    return (
      <div className="page-app-container">
        <div className="app-main-content">
          <Form style={{ width: '480px', margin: 'auto' }}>
            <FormItem
              {...formItemLayout}
              label={<span style={{ lineHeight: '30px' }}>{textMap.LABEL_SELECT_LANGUAGE}</span>} >
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
  return {
    todos: state.todos,
    language: state.language };
};
export default connect(mapStateToProps)(Module);
