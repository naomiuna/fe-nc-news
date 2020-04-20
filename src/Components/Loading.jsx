import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loading.module.css';

const Loading = (props) => {
  return (
    <div className={styles.loading}>
      <Loader
        type="Circles"
        color="#eb4888"
        height={props.height || 80}
        width={props.width || 80}
      />
    </div>
  );
};

export default Loading;
