import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }
  static defaultProps = {
    type: 'text',
  }
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }
  handleChange(e) {
    this.props.onChange(e);
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <input
        onChange={e => this.handleChange(e)}
        {...this.props}
      />
    );
  }
}
