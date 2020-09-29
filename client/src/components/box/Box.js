import React from 'react';
import { Wrapper2, Image } from './BoxStyles.js';
import GetColor from '../getColor';

const Box = ({ img }) => {
  return (
    <>
      <Wrapper2>
        <Image>
          <img src={img} />
        </Image>
        <GetColor />
      </Wrapper2>
    </>
  );
};

export default Box;
