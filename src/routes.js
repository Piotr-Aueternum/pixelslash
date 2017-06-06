import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import NotFound from './components/Not-found';
import Dashboard from './components/Dashboard';

export default (
  <Route path="/" component={App}>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/*" component={NotFound} />
  </Route>
);
