import React, { useState } from 'react';

import logo from '../../assets/images/logo.png';
import menuButton from '../../assets/images/menuButton.png';
import { BrowserView, MobileView } from 'react-device-detect';
import {
  Header,
  Container,
  Image,
  Menu,
  List,
  ElemenetList,
  Button,
  ListWrapper,
  ListButton,
} from './Navbar.style';

const Navbar = () => {
  const [edit, setEdit] = useState(false);
  return (
    <>
      <Header>
        <Container>
          <Image>
            <img src={logo} className="App-logo" alt="logo" />
          </Image>
          <Menu>
            <MobileView>
              <ListButton>
                <img
                  src={menuButton}
                  alt="my image"
                  onClick={() => {
                    setEdit(!edit);
                  }}
                />
              </ListButton>

              {edit === true ? (
                <ListWrapper>
                  <button>Delete</button>
                </ListWrapper>
              ) : null}
            </MobileView>
            <BrowserView>
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
            </BrowserView>
          </Menu>
        </Container>
      </Header>
    </>
  );
};
//c
export default Navbar;
