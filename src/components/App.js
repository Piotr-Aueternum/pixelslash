import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import LoginForm from './Login-form';
import RegisterForm from './Register-form';
import NotFound from './Not-found';
import Dashboard from './Dashboard';

export default () => (
  <div>
    <Route strict exact path="/">
      <ul>
        <li>
          <Link to="/register">Rejestracja</Link>
        </li>
        <li>
          <Link to="/">Logowanie</Link>
        </li>
      </ul>
    </Route>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route path="/dashboard" component={Dashboard} />
      <Route exact path="/register" component={RegisterForm} />
      <Route component={NotFound} />
    </Switch>
  </div>
);
