import { connect } from 'react-redux';
import Stats from '../components/Stats';
import { FETCH_ASYNC_STATS } from '../constans/actions';


const mapStateToProps = state => ({ ...state.stats });
const mapDispatchToProps = dispatch => ({ onMount: () => {
  dispatch({
    type: FETCH_ASYNC_STATS,
  });
} });
export default connect(mapStateToProps, mapDispatchToProps)(Stats);
