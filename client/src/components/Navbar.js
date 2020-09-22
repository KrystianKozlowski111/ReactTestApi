import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';
const Header = styled.section`
  background: white;
`;
const Menu = styled.div`
  display: inline-block;
  width: 80%;
`;
const Container = styled.div`
  max-width: 1240px;
  margin: auto;
`;
const List = styled.ul`
  list-style: none;
  text-align: right;
`;
const Image = styled.div`
  padding: 50px;
  display: inline-block;
`;
const ElemenetList = styled.li`
  display: inline-block;
  padding: 30px;
`;
const Navbar = () => {
  return (
    <div className="head">
      <Header>
        <Container>
          <Image>
            <img src={logo} className="App-logo" alt="logo" />
          </Image>
          <Menu>
            <List>
              <ElemenetList>Red</ElemenetList>
              <ElemenetList>Blue</ElemenetList>
              <ElemenetList>Green</ElemenetList>
              <ElemenetList>Yellow</ElemenetList>
              <ElemenetList>Pink</ElemenetList>
              <ElemenetList>Purple</ElemenetList>
            </List>
          </Menu>
        </Container>
      </Header>
    </div>
  );
};
//c
export default Navbar;
