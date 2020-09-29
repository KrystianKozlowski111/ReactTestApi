import React from 'react';
import { Wrapper2, Image } from './BoxStyles.js';
import GetColor from '../apollo';
const Box = ({ img, id }) => {
  return (
    <>
      <Wrapper2>
        <Image>
          <img src={img} />
        </Image>
        <GetColor id={id} />
      </Wrapper2>
    </>
  );
};

export default Box;
