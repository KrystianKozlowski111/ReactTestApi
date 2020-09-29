import React from 'react';
import { Wrapper } from './FlexStyles.js';
import Box from '../box';
import img1 from '../../Assets/Images/1.png';
import img2 from '../../Assets/Images/2.png';
import img3 from '../../Assets/Images/3.png';
const Flex = () => {
  return (
    <div>
      <Wrapper>
        <Box img={img1} />
        <Box img={img2} />
        <Box img={img3} />
      </Wrapper>
    </div>
  );
};

export default Flex;
