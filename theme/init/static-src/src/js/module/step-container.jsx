import React from 'react';
import { Steps, Button, message } from 'antd';

const Step = Steps.Step;

class Module extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      current: 0,
      stepList: [{
        title: 'Storage type',
        content: 'Second-content'
      }, {
        title: 'Super admin',
        content: 'First-content'
      }, {
        title: 'Server config',
        content: 'Fourth-content'
      }, {
        title: 'Start all server',
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
    return (
      <div className="page-app-container">
        <Steps current={current} >
          {stepList.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="app-main-content">
          {stepList[current].content}
        </div>
        <div className="app-main-action">
          {
            current < stepList.length - 1 &&
            <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            current === stepList.length - 1 &&
            <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            current > 0 &&
            (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
              </Button>
            )
          }
        </div>
      </div>
    );
  }
}

export default Module;
