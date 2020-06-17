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

export default class App extends PureComponent {

  handleGameStart() {
    return;
  }

  render() {
    const {errorsLimit, questions} = this.props;
    const artistQuestions = questions.filter((question) => question.type === `artist`);
    const genreQuestions = questions.filter((question) => question.type === `genre`);

    return (
      <Router>
        <Switch>
          <Route exact path="/" >
            <WelcomeScreen errorsLimit={errorsLimit} onGameStart={this.handleGameStart} />
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

