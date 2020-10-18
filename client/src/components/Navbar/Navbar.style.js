import styled from 'styled-components';
import { Media } from '../../assets/Mixins.style';
export const Header = styled.section`
  background: white;
  width: 100%;
`;
export const Menu = styled.div`
  display: inline-block;
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
  &#last {
    padding-right: 0px;
  }
`;

export const Container = styled.div`
  max-width: 1240px;
  justify-content: space-between;
  margin: auto;
  display: flex;
  align-items: flex-end;
  padding: 30px 0px;
`;
export const List = styled.ul`
  list-style: none;
  text-align: right;
  ${Media.md`
  text-align: left;

`}
`;
export const Image = styled.div`
  display: inline-block;
`;
export const ElemenetList = styled.li`
  display: inline-block;
  padding: 0px 30px;
  ${Media.md`
  padding: 0px 15px;
  
`}
`;
