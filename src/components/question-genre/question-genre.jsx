import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class QuestionGenre extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false]
    };
  }

  handleAnswer() {
    return true;
  }

  render() {
    const {question, onAnswer} = this.props;
    const {answers, genre, id: questionId} = question;
    const {answers: playerAnswers} = this.state;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
          </svg>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks"
            onSubmit={(e) => {
              e.preventDefault();
              onAnswer({
                id: questionId,
                value: this.handleAnswer()
              });
            }}
          >
            {
              answers.map((answer, index) => {
                const {src, id} = answer;
                return (
                  <div className="track" key={id}>
                    <button className="track__button track__button--play" type="button"></button>
                    <div className="track__status">
                      <audio>
                        <source src={src} type="audio/ogg" />
                      </audio>
                    </div>
                    <div className="game__answer">
                      <input className="game__input visually-hidden"
                        type="checkbox" name="answer"
                        checked={playerAnswers[index]}
                        id={`answer-${id}`}
                        value={`answer-${id}`}
                        onChange={(e) => {
                          const answerValue = e.target.checked;
                          this.setState((prevState) => {
                            const currentAnswers = prevState.answers;
                            currentAnswers[index] = answerValue;
                            return {answers: [...currentAnswers]};
                          });
                        }}

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
      </section>
    );
  }
}

QuestionGenre.propTypes = {
  onAnswer: PropTypes.func.isRequired,
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