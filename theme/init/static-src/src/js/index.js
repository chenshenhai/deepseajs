import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { Layout, Menu } from 'antd';

import rootRoducers from './reducer/index';

import ModIndex from './module/index.jsx';
import ModInfo from './module/async-info.jsx';

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

class AppRouter extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Layout className="layout">
            <Header style={{ height: '40px' }}>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                selectable={false}
                style={{ height: '40px', lineHeight: '40px' }}
              >
                <Menu.Item key="1">
                  <AppLink activeOnlyWhenExact={true} to='/' label="Index" />
                </Menu.Item>
                <Menu.Item key="2">
                  <AppLink to='/info' label="Info" />
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Route path='/' exact component={ModIndex} />
              <Route path='/info' component={ModInfo} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              toojs ©2018 Created by chenshenhai
            </Footer>
          </Layout>
        </div>
      </Router>
    );
  }
};

const mapStateToProps = (state) => {
  return { todos: state.todos, language: state.language };
};
const App = connect(mapStateToProps)(AppRouter);

const store = createStore(rootRoducers);
const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const container = document.getElementById('PageApp');

ReactDOM.render(
  <Root store={store} />,
  container);
