import { connect } from 'react-redux';
import Form from '../components/Form';
import { USER_ASYNC_REGISTER } from '../constans/actions';

const mapStateToProps = state => ({ ...state.stats });
const mapDispatchToProps = (dispatch, props) => ({ onFormSubmit: (e) => {
  console.log(props);
  e.preventDefault();
  dispatch({
    type: USER_ASYNC_REGISTER,
    payload: this.state,
  });
} });

export default connect(mapStateToProps, mapDispatchToProps)(Form);
