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
  Button,
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
              <ElemenetList>
                <Button href="/red" target="_blank">
                  Grey{' '}
                </Button>
              </ElemenetList>

              <ElemenetList>
                <Button href="/red" target="_blank">
                  Red{' '}
                </Button>
              </ElemenetList>
              <ElemenetList>
                <Button href="/red" target="_blank">
                  Blue{' '}
                </Button>
              </ElemenetList>
              <ElemenetList>
                <Button href="/red" target="_blank">
                  Green{' '}
                </Button>
              </ElemenetList>
              <ElemenetList>
                <Button href="/red" target="_blank">
                  Yellow{' '}
                </Button>
              </ElemenetList>
              <ElemenetList>
                <Button href="/red" target="_blank">
                  Pink{' '}
                </Button>
              </ElemenetList>
              <ElemenetList>
                <Button href="/red" target="_blank">
                  Purple{' '}
                </Button>
              </ElemenetList>
            </List>
          </Menu>
        </Container>
      </Header>
    </div>
  );
};
//c
export default Navbar;
