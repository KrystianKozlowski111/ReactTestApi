import React from 'react';
import { Wrapper2 } from './BoxStyles.js';
import GetColor from '../apollo';

const Box = ({ id }) => {
  return (
    <>
      <Wrapper2>
        <GetColor id={id} />
      </Wrapper2>
    </>
  );
};

export default Box;
