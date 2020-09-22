import React from 'react';
import styled from 'styled-components';
import Flex from './Flex';
const Wrapper = styled.section`
  padding: 20%;
  background: grey;
  position: relative;
`;
const Text = styled.h1`
  color: White;
  text-align: center;
  font-size: 60px;
  font-family: Perpetua, sans-serif;
`;
const Section1 = () => {
  return (
    <div>
      <Wrapper>
        <Text>I ❤ Color</Text>
        <Flex />
      </Wrapper>
    </div>
  );
};
//c
export default Section1;
