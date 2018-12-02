import React from 'react';
import ReactDOM from 'react-dom';
import { Steps, Button, message, Layout, Menu } from 'antd';
import './../css/index.less';

const { Header, Content, Footer } = Layout;
const container = document.getElementById('PageApp');
const Step = Steps.Step;

const steps = [{
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
}];

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      current: 0
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
    const { current } = this.state;
    return (
      <div className="page-app-container">
        <Steps current={current} >
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="app-steps-content">{steps[current].content}</div>
        <div className="app-steps-action">
          {
            current < steps.length - 1 &&
            <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            current === steps.length - 1 &&
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

ReactDOM.render(
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <App />
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      toojs ©2018 Created by chenshenhai
    </Footer>
  </Layout>,
  container);
