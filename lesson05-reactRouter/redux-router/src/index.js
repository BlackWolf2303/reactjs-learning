import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import reducers from './reducers';
import PostsIndex from './components/posts-index';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={PostsIndex} />
    </Router>
  </Provider>, 
  document.querySelector('#container'));