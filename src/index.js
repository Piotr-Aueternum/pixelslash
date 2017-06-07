import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import App from './components/App';
import reducer from './reducers/index';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = process.env.NODE_ENV === 'production'
  ? applyMiddleware(sagaMiddleware)
  : applyMiddleware(sagaMiddleware, logger);
const store = createStore(
  reducer,
  middleware,
);
sagaMiddleware.run(mySaga);

window.addEventListener('load', () => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('new-player'));
});
