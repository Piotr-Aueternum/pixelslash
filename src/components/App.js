import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import RegisterForm from '../containers/Register-form';
import NotFound from './Not-found';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={RegisterForm} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
