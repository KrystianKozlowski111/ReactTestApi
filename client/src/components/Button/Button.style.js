import styled from 'styled-components';
export const CustomButton = styled.button`
  border-radius: 50px;
  font-weight: bold;
  color: white;
  border: 0;
  font-size: 1em;
  margin: 1em 0em;
  padding: 1em 3.5em;
  position: relative;
  margin-top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #787878;
  &:hover {
    background: #606060;
  }
`;
