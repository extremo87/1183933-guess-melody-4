import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from "./welcome-screen";

configure({adapter: new Adapter()});

describe(`WelcomSreen e2e`, () => {
  it(`Is button pressed succesfully`, () => {
    const clickFn = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen errorsLimit={3} onGameStart={clickFn} />
    );

    const button = welcomeScreen.find(`button.welcome__button`);
    button.simulate(`click`);

    expect(clickFn).toHaveBeenCalled();
  });
});
