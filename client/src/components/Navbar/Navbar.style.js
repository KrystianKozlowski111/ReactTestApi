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
  ${Media.md`
  font-size:10px;
  

`}
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

  z-index: 10;
  border: none;
  font-weight: bold;
  background-color: White;
  color: black;
  top: 40px;
  right: 10px;
  position: absolute;
  &:hover {
    outline: none;
  }
`;
export const ListWrapper = styled.div`
  text-align: center;
  position: absolute;
  z-index: 9;
  top: 30px;
  height: 130px;
  width: 90px;
  right: 5px;
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
export const MobileElemenetList = styled.li`
  display: block;
  padding: 5px 0px;
`;
export const List = styled.ul`
  list-style: none;
  text-align: right;
  ${Media.md`
  text-align: left;
  margin-left:-50px;

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
