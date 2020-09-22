import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  width: 33, 3%;
  background-color: white;
  padding: 50px 20px;
  box-shadow: 5px 5px 10px 5px #888888;
`;
const Text = styled.h1`
  color: Black;
  text-align: center;
  font-size: 60px;
  font-family: Perpetua, sans-serif;
`;
const Text2 = styled.p`
  color: Black;
  text-align: center;
  font-size: 20px;
  font-family: Perpetua, sans-serif;
`;
const Box = () => {
  return (
    <div>
      <Wrapper>
        <Text>ggsdfgdf</Text>
        <Text2>ffdsfsd fdsf fdsfdsf</Text2>
      </Wrapper>
    </div>
  );
};
//c
export default Box;
