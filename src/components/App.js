import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import Helmet from 'react-helmet';
import LoginForm from './Login-form';
import RegisterForm from './Register-form';
import NotFound from './Not-found';
import Dashboard from './Dashboard';
import Navigation from './Navigation';

/* eslint-disable */
injectGlobal`
  body {
    margin: 0;
  }
  * {
    &,
    &::after,
    &::before,
      box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
  }
`;
/* eslint-enable */

const Container = styled.div`
  max-width: 470px;
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
  background: #eee;
`;
const navigationData = [{
  path: '/register',
  title: 'Rejestracja',
}, {
  path: '/login',
  title: 'Logowanie',
}];

export default () => (
  <Container>
    <Helmet>
      <title>Pixelslash</title>
    </Helmet>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/">
        <div>
          <Navigation data={navigationData} />
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/" component={LoginForm} />
          </Switch>
        </div>
      </Route>
      <Route component={NotFound} />
    </Switch>
  </Container>
);
