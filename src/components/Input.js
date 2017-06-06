import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }
  static defaultProps = {
    type: 'text',
  }
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  handleChange(e) {
    this.props.onChange(e);
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <input
        onChange={e => this.handleChange(e)}
        name={this.props.name}
        type={this.props.type}
        value={this.state.value}
      />
    );
  }
}
