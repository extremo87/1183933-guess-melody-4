import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class QuestionArtist extends PureComponent {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const artist = e.target.value;
    const {question, onAnswer} = this.props;
    const {song, id: questionId} = question;

    onAnswer({
      id: questionId,
      correctAnswer: (song.artist === artist)
    });
  }

  render() {
    const {song, answers} = this.props.question;
    const {renderPlayer} = this.props;

    return (
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            {
              renderPlayer(song.src, 0)
            }
          </div>
        </div>

        <form className="game__artist">
          {
            answers.map((answer) =>
              <div className="artist" key={answer.id}>
                <input className="artist__input visually-hidden"
                  type="radio"
                  name="answer"
                  value={answer.artist}
                  id={`answer-${answer.id}`}
                  onChange={this.handleChange}
                />
                <label className="artist__name" htmlFor={`answer-${answer.id}`}>
                  <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                  {answer.artist}
                </label>
              </div>
            )
          }
        </form>
      </section>
    );
  }
}

QuestionArtist.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
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
