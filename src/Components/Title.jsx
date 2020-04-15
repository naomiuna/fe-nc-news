import React from 'react';
import Emoji from './Emoji';

const Title = () => {
  return (
    <header className="Header">
      <h1>
        NC News <Emoji symbol="📰" label="newspaper" />
      </h1>
    </header>
  );
};

export default Title;
