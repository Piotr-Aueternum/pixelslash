import { connect } from 'react-redux';
import ResourcesBar from '../components/Resources-bar';

const mapStateToProps = state => ({ data: [...state.resources.data] });

export default connect(mapStateToProps)(ResourcesBar);
