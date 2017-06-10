import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from './Input';

const Form = ({ onFormSubmit, onInputChange, data, loading, logged }) => {
  if (logged) {
    return (<Redirect to="/dashboard" />);
  }
  if (loading) {
    return (<div>Loading...</div>);
  }
  return (<form onSubmit={e => onFormSubmit(e, data)}>
    {data.map((input, key) => (
      <Input
        onChange={e => onInputChange(e)}
        key={key}
        {...input}
      />
    ))}
    <button>Submit</button>
  </form>);
};
Form.propTypes = {
  logged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Form;
