import { connect } from 'react-redux';
import { userAsyncRegister, updateUserData } from '../actions/user';
import Form from '../components/Form';

const mapStateToProps = state => ({ data: state.user.inputs });
const mapDispatchToProps = dispatch => ({
  onFormSubmit: (e) => {
    e.preventDefault();
    dispatch(userAsyncRegister());
  },
  onInputChange: (e) => {
    const { value, name } = e.target;
    dispatch(updateUserData({ value, name }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
