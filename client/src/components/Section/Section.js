import React from 'react';

import { Wrapper, Title, Text } from './Section.style';
import Flex from '../Flex';
import Button from '../Button';

const Section = () => {
  return (
    <Wrapper>
      <Title>I ❤ Color</Title>
      <Text>
        Color really isn't that difficult to get right, if you know where to
        start. <br />
        Learn by doing and you'll be a master in no time.
      </Text>
      <Button />
      <Flex />
    </Wrapper>
  );
};
export default Section;
