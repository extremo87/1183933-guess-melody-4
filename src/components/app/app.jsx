import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';

export default class App extends React.Component {

  handleGameStart() {
    return;
  }

  render() {
    const {errorsLimit} = this.props;
    return <WelcomeScreen errorsLimit={errorsLimit} onGameStart={this.handleGameStart} />;
  }
}

App.propTypes = {
  errorsLimit: PropTypes.number.isRequired,
};

