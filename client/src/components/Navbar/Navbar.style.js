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
export const ListButton = styled.button`
  cursor: pointer;
  padding-top: 30px;
  border: none;
  font-weight: bold;
  background-color: White;
  color: black;
  top: 10px;
  right: 10px;
  position: absolute;
  &:hover {
    outline: none;
  }
`;
export const ListWrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 30px;
  height: 100px;
  width: 50px;
  right: 50px;
  border-radius: 5px;
  display: flex;
  border: 1px solid #ccc;
  flex-direction: column;
  background-color: white;
  padding: 10px 20px;
  & button {
    border: none;
    text-align: left;
    background: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding-bottom: 10px;
    font-weight: bold;
    color: #919bb1;
    cursor: pointer;
  }
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
