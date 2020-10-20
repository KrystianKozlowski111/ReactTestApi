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
  MobileElemenetList,
} from './Navbar.style';
import OutsideClickHandler from 'react-outside-click-handler';
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
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setEdit();
                  }}
                >
                  <ListWrapper>
                    <List>
                      <MobileElemenetList>
                        <Button href="/red" target="_blank">
                          Red
                        </Button>
                      </MobileElemenetList>
                      <MobileElemenetList>
                        <Button href="/red" target="_blank">
                          Blue
                        </Button>
                      </MobileElemenetList>
                      <MobileElemenetList>
                        <Button href="/red" target="_blank">
                          Green
                        </Button>
                      </MobileElemenetList>
                      <MobileElemenetList>
                        <Button href="/red" target="_blank">
                          Yellow
                        </Button>
                      </MobileElemenetList>
                      <MobileElemenetList>
                        <Button href="/red" target="_blank">
                          Pink
                        </Button>
                      </MobileElemenetList>
                      <MobileElemenetList>
                        <Button href="/red" id="last" target="_blank">
                          Purple
                        </Button>
                      </MobileElemenetList>
                    </List>
                  </ListWrapper>
                </OutsideClickHandler>
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
