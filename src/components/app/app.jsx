import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import QuestionArtist from '../question-artist/question-artist';
import QuestionGenre from '../question-genre/question-genre';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {getRandomArrayItem} from '../../utils/utils';

export default class App extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isStarted: false,
      answers: []
    };

    this.handleGameStart = this.handleGameStart.bind(this);
  }

  handleGameStart() {
    this.setState((state) => {
      return {isStarted: !state.isStarted};
    });
  }

  renderScreen(questions, errorsLimit) {
    const {isStarted, answers} = this.state;

    // If game isn't started and answers are empty then we return WelcomeScreen component
    if ((!isStarted) && (answers.length === 0)) {
      return <WelcomeScreen errorsLimit={errorsLimit} onGameStart={this.handleGameStart} />;
    }

    // If we see that game has started
    if ((isStarted) && (answers.length < questions.length)) {
      // We get not answered questions
      const availableQuestions = questions.filter((item) => !Object.keys(answers).includes(item.id));
      // Then get random question
      const question = getRandomArrayItem(availableQuestions);
      if (question) {
        switch (question.type) {
          case `genre`:
            return <QuestionGenre question={question} />;
          case `artist`:
            return <QuestionArtist question={question} />;
          case `default`:
            return null;
        }
      }
    }
    // Game was stopped
    if ((!isStarted) && (answers.length < questions.length) && (answers.length !== 0)) {
      // Some logic will be here (pause or fail probably)
      return null;
    }
    // Game was finished successfuly
    if ((!isStarted) && (answers.length === questions.length)) {
      // Some logic will be here (result page)
      return null;
    }

    return null;
  }

  render() {
    const {errorsLimit, questions} = this.props;
    const artistQuestions = questions.filter((question) => question.type === `artist`);
    const genreQuestions = questions.filter((question) => question.type === `genre`);

    return (
      <Router>
        <Switch>
          <Route exact path="/" >
            {this.renderScreen(questions, errorsLimit)}
          </Route>
          <Route path="/dev-artist">
            <QuestionArtist question={(artistQuestions) ? artistQuestions[0] : {}} />
          </Route>
          <Route path="/dev-genre">
            <QuestionGenre question={(genreQuestions) ? genreQuestions[0] : {}} />
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

