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
  position: relative;
  width: calc(33.33% - 60px);
  text-align: center;
  background-color: white;
  padding: 30px 20px;
  box-shadow: 5px 5px 10px 5px #888888;
  & button {
    border: none;
    text-align: left;
    background: white;
    padding: 8px 30px;
    margin: 0px;
    font-weight: bold;

    cursor: pointer;
    &#SaveButton {
      color: White;
      background-color: #0080ff;
      border-radius: 5px;
    }
  }
`;
export const ButtonsWrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 30px;
  right: 20px;
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
export const EditButton = styled.button`
  cursor: pointer;
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
export const TitleInput = styled.input`
  color: Black;
  text-align: center;
  font-size: 30px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: Perpetua, sans-serif;
  outline: none;
`;
export const Title = styled.h1`
  color: Black;
  text-align: center;
  font-size: 30px;
  font-family: Perpetua, sans-serif;
`;
export const TextInput = styled.textarea`
  color: Black;
  border-radius: 5px;
  border: 1px solid #ccc;
  min-height: 2em;
  margin-bottom: 10px;
  outline: none;
  resize: vertical;
  text-align: center;
  font-size: 15px;
  width: 100%;
  font-family: Nunito, sans-serif;
`;
export const Text = styled.p`
  color: Black;
  text-align: center;
  font-size: 15px;
  font-family: Nunito, sans-serif;
`;

export const Img = styled.img``;
