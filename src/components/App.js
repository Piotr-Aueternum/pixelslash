import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import LoginForm from './Login-form';
import RegisterForm from './Register-form';
import NotFound from './Not-found';
import Dashboard from './Dashboard';

export default () => (
  <div>
    <style>{`
      .active {
        color: red;
      }  
    `}</style>
    <ul>
      <li><NavLink activeClassName="active" to="/register">Rejestracja</NavLink></li>
      <li><NavLink exact activeClassName="active" to="/">Logowanie</NavLink></li>
    </ul>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route path="/dashboard" component={Dashboard} />
      <Route exact path="/register" component={RegisterForm} />
      <Route component={NotFound} />
    </Switch>
  </div>
);
