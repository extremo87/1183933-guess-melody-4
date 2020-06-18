import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionArtist from "./question-artist";

configure({adapter: new Adapter()});

const AVATAR_URL = `https://picsum.photos/128`;

const testQuestion = {
  id: 1,
  type: `artist`,
  song: {
    artist: `Aerosmith`,
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


it(`Correct answer choosed`, () => {
  const onAnswerFn = jest.fn();
  const screen = shallow(<QuestionArtist question={testQuestion} onAnswer={onAnswerFn} />);
  const input = screen.find(`input`).first();
  input.simulate(`change`, {
    preventDefault() {},
    target: {value: input.props().value}
  });
  expect(onAnswerFn).toHaveBeenCalledTimes(1);
  expect(onAnswerFn.mock.calls[0][0]).toMatchObject({id: 1, value: true});
});


