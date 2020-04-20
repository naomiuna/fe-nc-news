import React from 'react';
import Emoji from './Emoji';
import styles from './Title.module.css';
import { Link } from '@reach/router';

const Title = () => {
  return (
    <header className="Header">
      <Link to="/">
        <h1 className={styles.title}>
          NC News <Emoji symbol="📰" label="newspaper" />
        </h1>
      </Link>
    </header>
  );
};

export default Title;
