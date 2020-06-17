import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import questions from './mocks/questions';

const config = {
  errors: {
    limit: 3
  }
};

const init = () => {
  ReactDOM.render(
      <App errorsLimit={config.errors.limit} questions={questions}/>,
      document.querySelector(`#root`)
  );
};

init();

