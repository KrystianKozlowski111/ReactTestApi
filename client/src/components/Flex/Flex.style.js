import styled from 'styled-components';
import { Media } from '../../assets/Mixins.style';
import magnifier from '../../assets/images/magnifier.png';
export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  top: 85%;
  max-width: 1240px;
  margin: auto;
  margin-bottom: 50px;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  ${Media.md`
  padding-top:150px;
  width: 90%;
`}
`;
export const Search = styled.input`
  padding: 10px;
  background-image: url(${magnifier});
  background-repeat: no-repeat;
  position: relative;
  margin-top: 50px;
  left: 12%;
  transform: translateY(230%);
  color: black;
  background-color: white;
  border-radius: 50px;
  padding-left: 30px;
  font-size: 16px;
  ${Media.xlg`
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
`}
`;
export const Section = styled.div`
  min-height: 20em;
`;
