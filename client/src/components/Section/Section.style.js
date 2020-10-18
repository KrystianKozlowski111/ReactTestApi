import styled from 'styled-components';
import { Media } from '../../assets/Mixins.style';
export const Wrapper = styled.section`
  padding-top: 5%;
  padding-bottom: 15%;
  background: grey;
  position: relative;
`;

export const Title = styled.h1`
  color: White;
  text-align: center;
  font-size: 70px;
  font-family: Montserrat, sans-serif;
  ${Media.sm`
  font-size: 30px;
`}
`;
export const Text = styled.p`
  color: White;
  text-align: center;
  font-size: 18px;
  max-width: 50%;
  margin: auto;
  margin-top: -20px;
  font-family: Nunito, sans-serif;
  ${Media.sm`
  font-size: 14px;
`}
`;
