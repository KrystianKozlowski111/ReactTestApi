import styled from 'styled-components';
export const Image = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  width: 50%;
`;
export const Wrapper = styled.div`
  min-height: 20em;

  width: calc(33.33% - 60px);
  text-align: center;
  background-color: white;
  padding: 30px 20px;
  box-shadow: 5px 5px 10px 5px #888888;
`;
export const ButtonsWrapper = styled.div`
  text-align: center;
  background-color: white;
  padding: 30px 20px;
  box-shadow: 5px 5px 10px 5px #888888;
`;
export const EditButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: White;
  color: black;
  &:hover {
    background: grey;
    color: white;
  }
`;
export const Edit = styled.input`
  background-repeat: no-repeat;
  position: relative;

  color: black;
  background-color: white;
  border-radius: 50px;
  padding-left: 30px;
  font-size: 16px;
`;
export const Title = styled.h1`
  color: Black;
  text-align: center;
  font-size: 30px;
  font-family: Perpetua, sans-serif;
`;

export const Text = styled.p`
  color: Black;
  text-align: center;
  font-size: 15px;
  font-family: Nunito, sans-serif;
`;

export const Img = styled.img``;
