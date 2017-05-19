import { connect } from 'react-redux';
import Resources from '../components/Resources';

const mapStateToProps = (state, ownProps) => {
  const resources = state.resources;
  const props = {};
  Object.keys(resources).forEach((key) => {
    props[key] = resources[key] ? resources[key] : ownProps[key];
  });
  return props;
};

export default connect(mapStateToProps)(Resources);
