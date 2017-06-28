import { connect } from 'react-redux';
import Arena from '../components/Arena';
import { fetchAsyncArena } from '../actions/arena';


const mapStateToProps = state => ({ oponnents: state.arena.data });
const mapDispatchToProps = dispatch => ({ onMount: () => dispatch(fetchAsyncArena()) });
export default connect(mapStateToProps, mapDispatchToProps)(Arena);
