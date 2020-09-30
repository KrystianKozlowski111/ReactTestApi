import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 5%;
  padding-bottom: 15%;
  background: grey;
  position: relative;
`;
export const Button = styled.button`
  border-radius: 50% / 5%;
  top: -2px;
  bottom: -2px;
  right: 10px;
  left: 10px;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  position: relative;
  top: 50%;
  left: 43%;
  background-color: #787878;
  &:hover {
    background: #606060;
    color: white;
  }
`;
export const Title = styled.h1`
  color: White;
  text-align: center;
  font-size: 60px;
  font-family: Montserrat, sans-serif;
`;
export const Text = styled.p`
  color: White;
  text-align: center;
  font-size: 18px;
  font-family: Nunito, sans-serif;
`;
