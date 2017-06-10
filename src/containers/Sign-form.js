import { connect } from 'react-redux';
import { userAsyncSign, updateUserData, signRequest } from '../actions/user';
import Form from '../components/Form';

const mapStateToProps = (state, ownProps) => {
  const data = [...state.user.inputs];
  const filtered = data.filter((input) => {
    const array = [...input['data-attached']];
    return Boolean(array.filter(item => item === ownProps.type).length);
  });
  return ({ loading: state.user.loading, data: filtered, logged: state.user.logged });
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  onFormSubmit: (e, data) => {
    e.preventDefault();
    const query = {};
    data.forEach((item) => {
      Object.assign(query, { [item.name]: item.value });
    });
    dispatch(signRequest());
    dispatch(userAsyncSign({ query, type: ownProps.type }));
  },
  onInputChange: (e) => {
    const { value, name } = e.target;
    dispatch(updateUserData({ value, name }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
