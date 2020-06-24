import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {arraysEqual} from '../../utils/utils';

export default class QuestionGenre extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      answers: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAnswer() {
    const playerAnswers = [...this.state.answers];
    const {question} = this.props;
    const {genre, answers} = question;

    const correctAnswers = this._getCorrectAnswers(answers, genre);

    return arraysEqual(playerAnswers, correctAnswers);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {question} = this.props;
    const {id} = question;
    const {onAnswer} = this.props;

    onAnswer({id, correctAnswer: this.handleAnswer()});
  }

  handleChange(e) {
    const answer = Number(e.target.value);
    const stateAnswers = [...this.state.answers];
    const answers = (stateAnswers.includes(answer)) ? stateAnswers.filter((item) =>item !== answer)
      : [...stateAnswers, answer];

    return this.setState({answers});
  }

  _getCorrectAnswers(answers, genre) {
    return answers.reduce(function (accumulator, currentValue) {
      if (currentValue.genre === genre) {
        accumulator.push(currentValue.id);
      }
      return accumulator;
    }, []);
  }

  render() {
    const {question, renderPlayer} = this.props;
    const {answers, genre} = question;
    const {answers: playerAnswers} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={this.handleSubmit}>
          {
            answers.map((answer, index) => {
              const {src, id} = answer;
              return (
                <div className="track" key={id}>
                  {renderPlayer(src, index + 1)}
                  <div className="game__answer">
                    <input className="game__input visually-hidden"
                      type="checkbox" name="answer"
                      checked={playerAnswers.includes(id)}
                      id={`answer-${id}`}
                      value={id}
                      onChange={this.handleChange}

                    />
                    <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
                  </div>
                </div>
              );
            })
          }
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>

    );
  }
}

QuestionGenre.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired
  })
};
