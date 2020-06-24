import React from 'react';
import QuestionGenre from './question-genre';
import renderer from 'react-test-renderer';

const testQuestion = {
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
};


it(`Genre game screen renders correctly`, () => {
  const tree = renderer
    .create(<QuestionGenre question={testQuestion} onAnswer={() => {}} renderPlayer={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
