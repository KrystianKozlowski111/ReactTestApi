import React from 'react';
import styled from 'styled-components';
import Flex from './Flex';
const Wrapper = styled.section`
  padding: 20%;
  background: grey;
  position: relative;
`;
const Button = styled.button`
  border-radius: 50% / 5%;
  top: -2px;
  bottom: -2px;
  right: 10px;
  left: 10px;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  position: relative;
  top: 50%;
  left: 40%;
  background-color: #7a7979;
`;
const Text = styled.h1`
  color: White;
  text-align: center;
  font-size: 60px;
  font-family: Perpetua, sans-serif;
`;
const Text2 = styled.p`
  color: White;
  text-align: center;

  font-size: 15px;
  font-family: Perpetua, sans-serif;
`;
const Section1 = () => {
  return (
    <div>
      <Wrapper>
        <Text>I ❤ Color</Text>
        <Text2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </Text2>
        <Button>Over to you</Button>
        <Flex />
      </Wrapper>
    </div>
  );
};
//c
export default Section1;
