import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import questions from './mocks/questions';
import {config} from './config/config';

const init = () => {
  ReactDOM.render(
      <App errorsLimit={config.errors.limit} questions={questions}/>,
      document.querySelector(`#root`)
  );
};

init();

