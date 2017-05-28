import React from 'react';
import PropTypes from 'prop-types';
import ResourcesBar from '../containers/Resources-bar';
import Stats from '../containers/Stats';
import RegisterForm from '../containers/Register-form';

const App = ({ children }) => (
  <div>
    {children}
    <RegisterForm>
      <input />
      <button>Register</button>
    </RegisterForm>
    <ResourcesBar />
    <Stats />
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
