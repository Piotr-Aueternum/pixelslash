import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
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
    e.preventDefault();
    this.props.dispatch({
      type: 'USER_ASYNC_REGISTER',
      payload: this.state,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="user" onChange={e => this.setData(e, 'user')} />
        <input type="password" name="password" onChange={e => this.setData(e, 'password')} />
        <input type="password" name="password_2" onChange={e => this.setData(e, 'password_2')} />
        <button>Register</button>
      </form>
    );
  }
}

export default connect()(Form);
