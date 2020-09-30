import styled from 'styled-components';

export const Header = styled.section`
  background: white;
`;
export const Menu = styled.div`
  display: inline-block;
  width: 80%;
`;
export const Button = styled.a`
  border: none;
  height: 3rem;
  width: 50%;
  border-radius: 0.5rem;
  padding: 2% 25% 3% 25%;
  z-index: 5;
  text-decoration: none;
  cursor: pointer;
  background-color: White;
  color: black;
  &:hover {
    background: grey;
    color: white;
  }
`;

export const Container = styled.div`
  max-width: 1240px;
  margin: auto;
`;
export const List = styled.ul`
  list-style: none;
  text-align: right;
`;
export const Image = styled.div`
  padding: 30px 20px;
  display: inline-block;
`;
export const ElemenetList = styled.li`
  display: inline-block;
  padding: 30px;
`;
