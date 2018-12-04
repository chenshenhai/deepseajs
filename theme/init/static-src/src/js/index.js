import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Steps, Button, message, Layout, Menu } from 'antd';

import './../css/index.less';

const { Header, Content, Footer } = Layout;

const Language = () => <h2>Language</h2>;
const StepProcess = () => <h2>StepProcess</h2>;
const Info = () => <h2>Info</h2>;

function AppLink ({ label, to, activeOnlyWhenExact }) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <div className={match ? 'active' : ''}>
          {match ? '> ' : ''}
          <Link to={to}>{label}</Link>
        </div>
      )}
    />
  );
}

const AppRouter = () => (
  <Router>
    <div>
      <Layout className="layout">
        <Header style={{ height: '40px' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ height: '40px', lineHeight: '40px' }}
          >
            <Menu.Item key="1">
              <AppLink activeOnlyWhenExact={true} to='/' label="Language" />
            </Menu.Item>
            <Menu.Item key="2">
              <AppLink to='/step' label="StepProcess" />
            </Menu.Item>
            <Menu.Item key="3">
              <AppLink to='/info' label="Info" />
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Route path='/' exact component={Language} />
          <Route path='/step' component={StepProcess} />
          <Route path='/info' component={Info} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          toojs ©2018 Created by chenshenhai
        </Footer>
      </Layout>
    </div>
  </Router>
);

const container = document.getElementById('PageApp');

ReactDOM.render(
  <AppRouter />,
  container);
