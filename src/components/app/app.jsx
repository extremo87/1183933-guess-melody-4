import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';

export default class App extends React.Component {

  welcomeButtonHandler() {
    return;
  }

  render() {
    const {errorsLimit} = this.props;
    return <WelcomeScreen errorsLimit={errorsLimit} welcomeButtonHandler={this.welcomeButtonHandler} />;
  }
}

App.propTypes = {
  errorsLimit: PropTypes.number.isRequired,
};

