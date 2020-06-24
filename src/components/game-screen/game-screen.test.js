import React from "react";
import renderer from "react-test-renderer";
import GameScreen from "./game-screen.jsx";
import {QuestionType} from '../../config/config';


const children = <div className="test-component" />;

describe(`GameScreen component render correctly`, () => {
  test(`with type ${QuestionType.ARTIST}`, () => {
    const tree = renderer.create(
        <GameScreen type={QuestionType.ARTIST}>
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test(`with type ${QuestionType.GENRE}`, () => {
    const tree = renderer.create(
        <GameScreen type={QuestionType.GENRE}>
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
