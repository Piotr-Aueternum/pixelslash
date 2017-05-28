import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import NotFound from './components/Not-found';

export default (
  <Route component={App}>
    {/* <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />*/}
    <Route path="/*" component={NotFound} />
  </Route>
);
