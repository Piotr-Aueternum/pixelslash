import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../containers/Register-form';

const App = ({ children }) => (
  <div>
    {children}
    <RegisterForm />
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
