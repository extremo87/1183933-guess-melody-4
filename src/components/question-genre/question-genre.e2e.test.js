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


it(`User choosed correct answer`, () => {
  const onAnswerFn = jest.fn();
  const screen = shallow(<QuestionGenre question={testQuestion} onAnswer={onAnswerFn} renderPlayer={() => {}} />);
  const input = screen.find(`input`);
  const form = screen.find(`form`);

  input.at(0).simulate(`change`, {
    target: {value: input.at(0).props().value}
  });
  input.at(3).simulate(`change`, {
    target: {value: input.at(3).props().value}
  });
  form.simulate(`submit`, {
    preventDefault() {}
  });

  expect(onAnswerFn).toHaveBeenCalledTimes(1);
  expect(onAnswerFn.mock.calls[0][0]).toMatchObject({id: 1, correctAnswer: true});
});

it(`User choosed incorrect answer`, () => {
  const onAnswerFn = jest.fn();
  const screen = shallow(<QuestionGenre question={testQuestion} onAnswer={onAnswerFn} renderPlayer={() => {}}/>);
  const input = screen.find(`input`);
  const form = screen.find(`form`);

  input.at(0).simulate(`change`, {
    target: {value: input.at(1).props().value}
  });

  form.simulate(`submit`, {
    preventDefault() {}
  });

  expect(onAnswerFn).toHaveBeenCalledTimes(1);
  expect(onAnswerFn.mock.calls[0][0]).toMatchObject({id: 1, correctAnswer: false});
});

