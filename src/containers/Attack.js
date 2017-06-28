import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { attackAsyncRequest } from '../actions/attack';

const Attack = ({ children, onClick, id }) => (
  <button onClick={() => onClick(id)}>{children}</button>
  );
Attack.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({ onClick: id => dispatch(attackAsyncRequest(id)) });
const mapStateToProps = state => ({ logged: state.user.logged });

export default connect(mapStateToProps, mapDispatchToProps)(Attack);
