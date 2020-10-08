import React from 'react';

const Loading = ({ loading }) => {
  if (loading) {
    return 'Loading';
  }

  return '';
};

export default Loading;
