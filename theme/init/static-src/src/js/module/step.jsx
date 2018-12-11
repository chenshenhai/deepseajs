import React from 'react';
import { Steps, Button, message } from 'antd';
import StepLanguage from './step-language.jsx';
import StepServerConfig from './step-server-config.jsx';
import { connect } from 'react-redux';

const Step = Steps.Step;

class Module extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      current: 0,
      stepList: [{
        key: 'STEP_LANGUAGE',
        content: <StepLanguage />
      }, {
        key: 'STEP_SERVER_CONFIG',
        content: <StepServerConfig />
      }, {
        key: 'STEP_SUPER_ADMIN',
        content: 'First-content'
      }, {
        key: 'STEP_START_SERVER',
        content: 'Last-content'
      }]
    };
  }

  next () {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev () {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render () {
    const { current, stepList } = this.state;
    const { language = {} } = this.props;
    const { textMap } = language;
    return (
      <div className="page-app-container">
        <Steps current={current} >
          {stepList.map(item => <Step key={item.key} title={textMap[item.key]} />)}
        </Steps>
        <div className="app-main-content">
          {stepList[current].content}
        </div>
        <div className="app-main-action">
          {
            current > 0 &&
            (
              <Button style={{ marginRight: 8 }} onClick={() => this.prev()}>
                {textMap.BTN_PREVIOUS}
              </Button>
            )
          }
          {
            current < stepList.length - 1 &&
            <Button type="primary" onClick={() => this.next()}>
              {textMap.BTN_NEXT}
            </Button>
          }
          {
            current === stepList.length - 1 &&
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              {textMap.BTN_NEXT}
            </Button>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language
  };
};
export default connect(mapStateToProps)(Module);
