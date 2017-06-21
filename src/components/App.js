import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import LoginForm from './Login-form';
import RegisterForm from './Register-form';
import NotFound from './Not-found';
import Dashboard from './Dashboard';

export default () => (
  <div>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/">
        <div>
          <style>{`
            .active {
              color: red;
            }  
          `}</style>
          <ul>
            <li><NavLink activeClassName="active" to="/register">Rejestracja</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/login">Logowanie</NavLink></li>
          </ul>
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/" component={LoginForm} />
          </Switch>
        </div>
      </Route>
      <Route component={NotFound} />
    </Switch>
  </div>
);
