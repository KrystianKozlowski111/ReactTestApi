import React from 'react';
import styled from 'styled-components';
import GetColor from './Apollo';
const Wrapper = styled.div`
  max-width: 1240px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  bottom: -150px;
`;
const Wrapper2 = styled.div`
  width: 150px;
  background-color: white;
  padding: 50px 20px;
  box-shadow: 5px 5px 10px 5px #888888;
`;
const Flex = ({ tek }) => {
  return (
    <div>
      <Wrapper>
        <Wrapper2>
          <GetColor id={1} />
        </Wrapper2>
        <Wrapper2>
          <GetColor id={2} />
        </Wrapper2>
        <Wrapper2>
          <GetColor id={3} />
        </Wrapper2>
      </Wrapper>
    </div>
  );
};
//c
export default Flex;
