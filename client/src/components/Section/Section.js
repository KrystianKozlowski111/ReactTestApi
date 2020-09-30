import React from "react";

import { Wrapper, Title, Text } from "./Section.style";

import Button from "../Button";

const Section = () => {
  return (
    <Wrapper>
      <Title>I ❤ Color</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut
      </Text>
      <Button />
    </Wrapper>
  );
};
export default Section;
