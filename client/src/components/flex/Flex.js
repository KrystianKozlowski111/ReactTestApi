import React from 'react';
import { Wrapper, Wrapper2 } from './FlexStyles.js';
import GetColor from '../apollo';

const Flex = ({ tek }) => {
  return (
    <div>
      <Wrapper>
        <Wrapper2>
          <GetColor id={1} />
        </Wrapper2>
        <Wrapper2>
          <GetColor id={2} />
        </Wrapper2>
        <Wrapper2>
          <GetColor id={3} />
        </Wrapper2>
      </Wrapper>
    </div>
  );
};

export default Flex;
