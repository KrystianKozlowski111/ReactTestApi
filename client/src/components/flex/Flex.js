import React from 'react';
import { Wrapper } from './FlexStyles.js';
import Box from '../box';

const Flex = () => {
  return (
    <div>
      <Wrapper>
        <Box id={1} />
        <Box id={2} />
        <Box id={3} />
      </Wrapper>
    </div>
  );
};

export default Flex;
