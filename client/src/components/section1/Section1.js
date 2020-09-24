import React from 'react';
import { Wrapper, Text, Text2, Button } from './Section1Styles.js';
import Flex from '../flex';

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
