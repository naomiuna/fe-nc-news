import React from 'react';
import Emoji from './Emoji';

const SortArticles = ({ handleSort }) => {
  const handleInput = (event) => {
    const { value } = event.target;

    handleSort(value);
  };
  return (
    <div>
      <button value="created_at" onClick={handleInput}>
        New
        <Emoji symbol="🆕" label="new" />
      </button>
      <button value="votes" onClick={handleInput}>
        Top
        <Emoji symbol="🔝" label="top" />
      </button>
      <button value="comment_count" onClick={handleInput}>
        Hot
        <Emoji symbol="🔥" label="fire" />
      </button>
    </div>
  );
};

export default SortArticles;
