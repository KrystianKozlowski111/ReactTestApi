import React from 'react';

import logo from '../../assets/images/logo.png';

import {
  Header,
  Container,
  Image,
  Menu,
  List,
  ElemenetList,
  Button,
} from './Navbar.style';

const Navbar = () => {
  return (
    <>
      <Header>
        <Container>
          <Image>
            <img src={logo} className="App-logo" alt="logo" />
          </Image>
          <Menu>
            <List>
              <ElemenetList>
                <Button href="/red" target="_blank">
                  Red
                </Button>
              </ElemenetList>
              <ElemenetList>
                <Button href="/red" target="_blank">
                  Blue
                </Button>
              </ElemenetList>
              <ElemenetList>
                <Button href="/red" target="_blank">
                  Green
                </Button>
              </ElemenetList>
              <ElemenetList>
                <Button href="/red" target="_blank">
                  Yellow
                </Button>
              </ElemenetList>
              <ElemenetList>
                <Button href="/red" target="_blank">
                  Pink
                </Button>
              </ElemenetList>
              <ElemenetList>
                <Button href="/red" id="last" target="_blank">
                  Purple
                </Button>
              </ElemenetList>
            </List>
          </Menu>
        </Container>
      </Header>
    </>
  );
};
//c
export default Navbar;
