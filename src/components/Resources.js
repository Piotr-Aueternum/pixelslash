import React from 'react';
import PropTypes from 'prop-types';
import styles from './Resources.scss';

export default function Resource(props) {
  return (
    <div className={styles.Resources}>
      <div>{props.children}</div>
      <img alt={props.alt} src={props.src} className={`${styles.icon} ${styles[`icon_${props.size}`]}`} />
    </div>
  );
}

Resource.defaultProps = {
  size: 'normal',
  alt: '',
  children: '',
};
Resource.propTypes = {
  children: PropTypes.node,
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
};
