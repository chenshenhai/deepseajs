import React from 'react';
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import ('./info.jsx'),
  loading: () => (<div>loading</div>)
});

export default class AsyncModule extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}