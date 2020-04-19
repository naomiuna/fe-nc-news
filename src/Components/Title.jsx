import React from 'react';
import Emoji from './Emoji';
import styles from './Title.module.css';

const Title = () => {
  return (
    <header className="Header">
      <h1 className={styles.title}>
        NC News <Emoji symbol="📰" label="newspaper" />
      </h1>
    </header>
  );
};

export default Title;
