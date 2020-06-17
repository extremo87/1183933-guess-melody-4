import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionGenre from "./question-genre";

configure({adapter: new Adapter()});

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


it(`Genre question form sent`, () => {
  const onAnswerFn = jest.fn();
  const screen = shallow(<QuestionGenre question={testQuestion} onAnswer={onAnswerFn} />);
  const input = screen.find(`input`).first();
  const form = screen.find(`form`);
  input.simulate(`change`, {
    target: {checked: true}
  });
  form.simulate(`submit`, {
    preventDefault() {}
  });
  expect(onAnswerFn).toHaveBeenCalledTimes(1);
  expect(onAnswerFn.mock.calls[0][0]).toMatchObject({id: 1, value: true});
});


