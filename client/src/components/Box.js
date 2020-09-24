import React from 'react';
import styled from 'styled-components';
import GetColor from './Apollo';
const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  background-color: white;
  padding: 50px 20px;
  box-shadow: 5px 5px 10px 5px #888888;
`;
const Box = () => {
  return (
    <div>
      <Wrapper>
        <GetColor />
      </Wrapper>
    </div>
  );
};
//c
export default Box;
