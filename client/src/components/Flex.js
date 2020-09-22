import React from 'react';
import styled from 'styled-components';
import Box from './Box';
const Wrapper = styled.div`
  max-width: 1240px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  bottom: -100px;
`;

const Flex = ({ tek }) => {
  return (
    <div>
      <Wrapper>
        <Box />
        <Box />
        <Box />
      </Wrapper>
    </div>
  );
};
//c
export default Flex;
