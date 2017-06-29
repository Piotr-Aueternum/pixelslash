import React from 'react';
import PropTypes from 'prop-types';
import Attack from '../containers/Attack';

export default class extends React.Component {
  static propTypes = {
    oponnents: PropTypes.arrayOf(PropTypes.object).isRequired,
    onMount: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    return (
      <div>
        <div>Test</div>
        <ul>
          {this.props.oponnents.map((oponnent, key) => (
            <li key={key}>
              {oponnent.name}, Lv. {oponnent.lvl}
              <Attack id={oponnent.name}>Atak</Attack>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
