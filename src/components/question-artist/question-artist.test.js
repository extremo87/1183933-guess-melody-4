import React from 'react';
import QuestionArtist from './question-artist';
import renderer from 'react-test-renderer';

const AVATAR_URL = `https://picsum.photos/128`;

const testQuestion = {
  id: 1,
  type: `artist`,
  song: {
    artist: `Bon Jovi`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    id: 1,
    picture: `${AVATAR_URL}`,
    artist: `Aerosmith`,
  }, {
    id: 2,
    picture: `${AVATAR_URL}`,
    artist: `Bon Jovi`,
  }, {
    id: 3,
    picture: `${AVATAR_URL}`,
    artist: `Rolling Stones`,
  }],
};


it(`Artist game screen renders correctly`, () => {
  const tree = renderer
    .create(<QuestionArtist question={testQuestion} onAnswer={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

