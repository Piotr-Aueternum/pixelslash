import React from 'react';
import PropTypes from 'prop-types';
import styles from './Progress-bar.scss';

export default function Progressbar(props) {
  if (props.progress < 0 || props.progress > 100) {
    throw Error(`Invalid progress value(${props.progress}) it should be from 0 to 100!`);
  }
  return (
    <div className={styles.Progressbar}>
      {props.children}
      <div className={styles.bar}>
        <div
          className={`${styles.fill} ${styles[`fill_${props.type}`]}`}
          style={{ width: `${props.progress}%` }}
        />
      </div>
    </div>
  );
}


Progressbar.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  progress: PropTypes.number.isRequired,
};
