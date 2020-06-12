import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

const errorsLimit = 3;

describe(`App`, () => {
  it(`App renders correctly`, () => {
    const tree = renderer
      .create(<App errorsLimit={errorsLimit} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
