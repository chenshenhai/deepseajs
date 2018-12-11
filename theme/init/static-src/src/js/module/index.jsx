import React from 'react';
import { connect } from 'react-redux';
import Step from './step.jsx';

class Module extends React.Component {
  render () {
    return (
      <div className="page-app-container">
        <div className="app-main-content">
          <Step />
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
