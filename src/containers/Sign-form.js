import { connect } from 'react-redux';
import { userAsyncSign, signRequest } from '../actions/user';
import Form from '../components/Form';

const mapStateToProps = (state, ownProps) => {
  const inputs = [...state.user.inputs];
  const filtered = inputs.filter((input) => {
    const array = [...input['data-attached']];
    return Boolean(array.filter(item => item === ownProps.type).length);
  });
  return ({ loading: state.user.loading, inputs: filtered, logged: state.user.logged });
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (e, data) => {
    e.preventDefault();
    const query = {};
    data.forEach((item) => {
      Object.assign(query, { [item.name]: item.value });
    });
    dispatch(signRequest());
    dispatch(userAsyncSign({ query, type: ownProps.type }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
