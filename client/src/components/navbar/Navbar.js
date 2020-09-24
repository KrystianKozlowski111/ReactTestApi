import React from 'react';
import logo from '../../Assets/Images/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Header,
  Container,
  Image,
  Menu,
  List,
  ElemenetList,
} from './NavbarStyles.js';

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
