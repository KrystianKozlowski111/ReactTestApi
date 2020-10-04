import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  top: 85%;
  width: 1240px;
  margin: auto;
  margin-bottom: 50px;
`;
export const Search = styled.input`
  padding: 10px;
  position: relative;
  margin-top: 50px;
  left: 12%;
  transform: translateY(250%);
  color: black;
  background-color: white;
  border-radius: 50px;
`;
export const Section = styled.div`
  min-height: 20em;
`;
