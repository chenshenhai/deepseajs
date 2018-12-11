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
  handleChange (value) {
    const { dispatch } = this.props;
    // dispatch({
    //   type: 'SELECT_LANGUAGE',
    //   lang: value
    // });
  }
  render () {
    const { language } = this.props;
    const { textMap, lang } = language;
    return (
      <div>
        <Form style={{ width: '720', margin: 'auto' }}>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>Storage type</span>} >
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="file">File storage</Radio.Button>
              <Radio.Button value="mysql">MySQL</Radio.Button>
            </Radio.Group>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>File storage path</span>} >
            <Input placeholder="File storage path" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>MySQL port</span>} >
            <Input style={{ width: '160px' }} placeholder="MySQL port" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px', width: '120px' }}>MySQL username</span>} >
            <Input style={{ width: '160px' }} placeholder="MySQL username" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>MySQL password</span>} >
            <Input style={{ width: '160px' }} placeholder="MySQL password" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>Dashboard server port</span>} >
            <Input style={{ width: '160px' }} placeholder="Dashboard server port" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>Portal server port</span>} >
            <Input style={{ width: '160px' }} placeholder="Portal server port" />
          </FormItem>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language };
};
export default connect(mapStateToProps)(Module);
