import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LoginForm from './Login-form';
import RegisterForm from './Register-form';
import NotFound from './Not-found';
import Dashboard from './Dashboard';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route path="/dashboard" component={Dashboard} />
      <Route exact path="/register" component={RegisterForm} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
