import React from 'react';
import WelcomeScreen from './welcome-screen';
import renderer from 'react-test-renderer';

const errorsLimit = 3;

const welcomeButtonHandler = () => {
  return null;
};

describe(`WelcomeScreen`, () => {
  it(`WelcomeScreen renders correctly`, () => {
    const tree = renderer
      .create(<WelcomeScreen errorsLimit={errorsLimit} welcomeButtonHandler={welcomeButtonHandler} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
