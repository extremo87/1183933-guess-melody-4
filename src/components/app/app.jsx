import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import QuestionArtist from '../question-artist/question-artist';
import QuestionGenre from '../question-genre/question-genre';
import GameScreen from '../game-screen/game-screen';
import withAudioPlayer from '../../hocs/withAudioPlayer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {getRandomArrayItem} from '../../utils/utils';
import {QuestionType} from '../../config/config';

const QuestionGenreWithPlayer = withAudioPlayer(QuestionGenre);
const QuestionArtistWithPlayer = withAudioPlayer(QuestionArtist);


export default class App extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isStarted: false,
      answers: []
    };

    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleGameStart() {
    this.setState(() => {
      return {isStarted: true};
    });
  }

  handleAnswer(answer) {
    this.setState((prevState) => {
      const answers = [...prevState.answers, answer];
      return {answers};
    });
  }

  renderScreen(questions, errorsLimit) {
    const {isStarted, answers} = this.state;
    // If we see that game has started
    if (isStarted) {
      // We get not answered questions
      const answeredQuestion = answers.map((item) => item.id);
      const availableQuestions = questions.filter((item) => !answeredQuestion.includes(item.id));
      // Then get random question
      const question = getRandomArrayItem(availableQuestions);
      if (question) {
        switch (question.type) {

          case QuestionType.GENRE:
            return (
              <GameScreen type={question.type}>
                <QuestionGenreWithPlayer key={question.id} question={question} onAnswer={this.handleAnswer}/>
              </GameScreen>
            );

          case QuestionType.ARTIST:
            return (
              <GameScreen type={question.type}>
                <QuestionArtistWithPlayer key={question.id} question={question} onAnswer={this.handleAnswer}/>
              </GameScreen>
            );
        }
      }
    }
    // If game isn't started and answers are empty then we return WelcomeScreen component
    return <WelcomeScreen errorsLimit={errorsLimit} onGameStart={this.handleGameStart} />;
  }

  render() {
    const {errorsLimit, questions} = this.props;
    const artistQuestions = questions.filter((question) => question.type === QuestionType.ARTIST);
    const genreQuestions = questions.filter((question) => question.type === QuestionType.GENRE);

    return (
      <Router>
        <Switch>
          <Route exact path="/" >
            {this.renderScreen(questions, errorsLimit)}
          </Route>
          <Route path="/dev-artist">
            <QuestionGenreWithPlayer question={(artistQuestions.length > 0) ? artistQuestions[0] : {}} onAnswer={this.handleAnswer} />
          </Route>
          <Route path="/dev-genre">
            <QuestionGenreWithPlayer question={(genreQuestions.length > 0) ? genreQuestions[0] : {}} onAnswer={this.handleAnswer} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  errorsLimit: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

