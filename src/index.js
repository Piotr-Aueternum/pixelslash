import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducer from './reducers/index';

const middleware = process.env.DEVELOPMENT ? applyMiddleware(logger) : undefined;
const store = createStore(reducer, middleware);

window.addEventListener('load', () => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('new-player'));
  // ReactDOM.render(<App />, document.getElementById('new-player'));
});
