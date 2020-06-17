import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class QuestionArtist extends PureComponent {

  render() {
    const {question} = this.props;
    const {song, answers} = question;

    return (
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
          </svg>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <button className="track__button track__button--play" type="button"></button>
              <div className="track__status">
                <audio>
                  <source src={song.src} type="audio/ogg" />
                  Your browser does not support the audio tag.
                </audio>
              </div>
            </div>
          </div>

          <form className="game__artist">
            {
              answers.map((answer) =>
                <div className="artist" key={answer.id}>
                  <input className="artist__input visually-hidden" type="radio" name="answer" value={answer.artist} id={`answer-${answer.id}`} />
                  <label className="artist__name" htmlFor="answer-1">
                    <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                    {answer.artist}
                  </label>
                </div>
              )
            }
          </form>
        </section>
      </section>
    );
  }
}

QuestionArtist.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }),
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })).isRequired
  }).isRequired
};
