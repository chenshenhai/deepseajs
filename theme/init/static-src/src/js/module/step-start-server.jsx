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
  render () {
    const { language } = this.props;
    const { textMap, lang } = language;
    return (
      <div>
        <p style={{ textAlign: 'center' }}>init server</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language };
};
export default connect(mapStateToProps)(Module);
