import React from 'react';
import PropTypes from 'prop-types';
import Resources from './Resources';
import styles from './Resources-bar.scss';

export default function ResourcesBar(props) {
  return (
    <div className={styles.ResourcesBar}>
      <Resources
        alt="silver coin standard currency"
        src="images/silver_coin.png"
      >
        {props.silver}
      </Resources>
      <Resources
        className={styles.Resources}
        alt="golden coin exclusive currency"
        src="images/golden_coin.png"
      >
        {props.gold}
      </Resources>
    </div>
  );
}


ResourcesBar.propTypes = {
  silver: PropTypes.node.isRequired,
  gold: PropTypes.node.isRequired,
};
