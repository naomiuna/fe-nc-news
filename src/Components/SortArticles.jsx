import React from 'react';
import Emoji from './Emoji';
import styles from './SortArticles.module.css';

const SortArticles = ({ handleSort }) => {
  const handleInput = (event) => {
    const { value } = event.target;

    handleSort(value);
  };
  return (
    <div className={styles.sorter}>
      <button
        className={styles.button}
        value="created_at"
        onClick={handleInput}
      >
        New <Emoji symbol="🆕" label="new" />
      </button>
      <button className={styles.button} value="votes" onClick={handleInput}>
        Top <Emoji symbol="🔝" label="top" />
      </button>
      <button
        className={styles.button}
        value="comment_count"
        onClick={handleInput}
      >
        Hot <Emoji symbol="🔥" label="fire" />
      </button>
    </div>
  );
};

export default SortArticles;
