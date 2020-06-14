import React from 'react';
import WelcomeScreen from './welcome-screen';
import renderer from 'react-test-renderer';

const errorsLimit = 3;

const testGameStart = () => {
  return null;
};

describe(`WelcomeScreen`, () => {
  it(`WelcomeScreen renders correctly`, () => {
    const tree = renderer
      .create(<WelcomeScreen errorsLimit={errorsLimit} onGameStart={testGameStart} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
