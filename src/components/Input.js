import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.state.value = {

    };
  }
  handleSubmit(e) {
    this.props.onChange(e);
  }
  render() {
    return (
      <input
        onChange={this.handleChange}
        value={this.state.value[this.props.name]}
      />
    );
  }
}
