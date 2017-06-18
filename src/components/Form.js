import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from './Input';

export default class extends React.Component {
  static propTypes = {
    logged: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      inputs: this.props.inputs,
    };
  }
  onInputChange(e) {
    const { value, name } = e.target;
    const arr = [...this.state.inputs];
    const inputs = arr.map((item) => {
      if (item.name === name) {
        return { ...item, value };
      }
      return item;
    });
    this.setState({ inputs });
  }
  onSubmit(e) {
    this.props.onSubmit(e, this.state.inputs);
  }
  render() {
    const { inputs } = this.state;
    const { loading, logged } = this.props;
    if (logged) {
      return (<Redirect to="/dashboard" />);
    }
    if (loading) {
      return (<div>Loading...</div>);
    }
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        {inputs.map((input, key) => (
          <Input
            onChange={e => this.onInputChange(e)}
            key={key}
            {...input}
          />
        ))}
        <button>Submit</button>
      </form>
    );
  }
}
