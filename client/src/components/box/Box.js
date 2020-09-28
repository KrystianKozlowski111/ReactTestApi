import React from 'react';
import { Wrapper2 } from './BoxStyles.js';
import GetColor from '../apollo';

const Box = ({ id }) => {
  return (
    <div>
      <Wrapper2>
        <GetColor id={id} />
      </Wrapper2>
    </div>
  );
};

export default Box;
