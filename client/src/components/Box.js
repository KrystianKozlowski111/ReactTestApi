import React from 'react';
import styled from 'styled-components';
import GetColor from './Apollo';
const Wrapper = styled.div`
  width: 33, 3%;
  background-color: white;
  padding: 50px 20px;
  box-shadow: 5px 5px 10px 5px #888888;
`;
const Box = () => {
  return (
    <div>
      <Wrapper>
        <GetColor id={2} />
      </Wrapper>
    </div>
  );
};
//c
export default Box;
