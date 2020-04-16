import React from 'react';
import Emoji from './Emoji';

const Error = ({ status, msg }) => {
  return (
    <div>
      <h2>
        Oops {status} error! <Emoji symbol="🙅🏼" label="person gesturing no" />
        <br />
      </h2>
      <p>{msg}</p>
    </div>
  );
};

export default Error;
