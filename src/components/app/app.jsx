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
    const {errorsLimit} = this.props;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomeScreen errorsLimit={errorsLimit} onGameStart={this.handleGameStart} />
          </Route>
          <Route path="/guess-artist">
            <QuestionArtist />
          </Route>
          <Route path="/guess-genre">
            <QuestionGenre />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  errorsLimit: PropTypes.number.isRequired,
};

