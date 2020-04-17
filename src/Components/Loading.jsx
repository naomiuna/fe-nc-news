import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div>
      <Loader type="Circles" color="#eb4888" height={80} width={80} />
    </div>
  );
};

export default Loading;
