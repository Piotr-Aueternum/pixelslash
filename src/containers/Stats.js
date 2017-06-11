import { connect } from 'react-redux';
import Stats from '../components/Stats';
import { fetchAsyncStats } from '../actions/stats';


const mapStateToProps = state => ({ ...state.stats });
const mapDispatchToProps = dispatch => ({ onMount: () => dispatch(fetchAsyncStats()) });
export default connect(mapStateToProps, mapDispatchToProps)(Stats);
