import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { init } from '@rematch/core';
import * as models from './models';

import App from './components/App';

const store = init({
  models,
});

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.querySelector('#root')
);