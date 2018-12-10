import React from 'react';
import { connect } from 'react-redux';
import StepContainer from './step-container.jsx';

class Module extends React.Component {
  render () {
    return (
      <div className="page-app-container">
        <div className="app-main-content">
          <StepContainer />
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
