import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const Form = ({ onFormSubmit, onInputChange, data }) => (
  <form onSubmit={e => onFormSubmit(e)}>
    {data.map((input, key) => (
      <Input
        onChange={(e) => {
          onInputChange(e);
        }}
        key={key}
        {...input}
      />
    ))}
    <button>Submit</button>
  </form>
);
Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Form;
