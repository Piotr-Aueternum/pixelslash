import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { asyncLogout } from '../actions/user';

const Button = ({ children, onClick, logged }) => {
  if (logged) {
    return (<Link to="/" onClick={() => onClick()}>{children}</Link>);
  }
  return (<Redirect push to="/" />);
};
Button.propTypes = {
  logged: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({ onClick: () => {
  dispatch(asyncLogout());
} });
const mapStateToProps = state => ({ logged: state.user.logged });

export default connect(mapStateToProps, mapDispatchToProps)(Button);
