import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

const errorsLimit = 3;

const AVATAR_URL = `https://picsum.photos/128`;

const testQuestions = [
  {
    id: 1,
    type: `genre`,
    genre: `rock`,
    answers: [{
      id: 1,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      id: 2,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      id: 3,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      id: 4,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  }, {
    id: 2,
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      id: 1,
      picture: `${AVATAR_URL}?random=${Math.random()}}`,
      artist: `John Snow`,
    }, {
      id: 2,
      picture: `${AVATAR_URL}?random=${Math.random()}`,
      artist: `Jack Daniels`,
    }, {
      id: 3,
      picture: `${AVATAR_URL}?random=${Math.random()}`,
      artist: `Jim Beam`,
    }],
  }, {
    id: 3,
    type: `artist`,
    song: {
      artist: `Bon Jovi`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      id: 1,
      picture: `${AVATAR_URL}?random=${Math.random()}}`,
      artist: `Aerosmith`,
    }, {
      id: 2,
      picture: `${AVATAR_URL}?random=${Math.random()}`,
      artist: `Bon Jovi`,
    }, {
      id: 3,
      picture: `${AVATAR_URL}?random=${Math.random()}`,
      artist: `Rolling Stones`,
    }],
  }
];

describe(`App`, () => {
  it(`App renders correctly`, () => {
    const tree = renderer
      .create(<App errorsLimit={errorsLimit} questions={testQuestions}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
