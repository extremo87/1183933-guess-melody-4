import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const config = {
  errors: {
    limit: 3
  }
};

const init = () => {
  ReactDOM.render(
      <App errors={config.errors.limit} />,
      document.querySelector(`#root`)
  );
};

init();

