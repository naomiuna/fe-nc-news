import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div>
      <Loader type="Circles" color="#ba1f31" height={80} width={80} />
    </div>
  );
};

export default Loading;
