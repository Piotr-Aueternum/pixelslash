import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends React.Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  }
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      user: '',
      password: '',
      password_2: '',
    };
  }
  setData(e, name) {
    this.setState({ [name]: e.target.value });
  }
  handleSubmit(e) {
    this.props.onFormSubmit(e);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children}
      </form>
    );
  }
}

export default connect()(Form);
