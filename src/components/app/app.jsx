import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen';

export default class App extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const {errors} = this.props;
    return <WelcomeScreen errors={errors} />;
  }
}

