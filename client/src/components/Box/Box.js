import React, { useState } from 'react';
import EditImg from '../../assets/images/edit.png';
import DeleteImg from '../../assets/images/delete.png';
import { gql, useMutation } from '@apollo/client';
import {
  Wrapper,
  ButtonsWrapper,
  EditButton,
  Image,
  Title,
  Text,
  Img,
  TitleInput,
  TextInput,
} from './Box.style';
import { useForm } from 'react-hook-form';
import OutsideClickHandler from 'react-outside-click-handler';

const UPDATE_COLOR = gql`
  mutation updateColor($id: ID!, $title: String!, $text: String!) {
    updateColor(id: $id, title: $title, text: $text) {
      id
      title
      text
    }
  }
`;

const DELETE_COLOR = gql`
  mutation deleteColor($id: ID!) {
    deleteColor(id: $id) {
      id
    }
  }
`;
const Box = (props) => {

  const [updateColor,{data}] = useMutation(UPDATE_COLOR,{onCompleted: (data) => { console.log(data);}});
  const [deleteColor] = useMutation(DELETE_COLOR,{onCompleted: () => {  setDelete(!deleted);}});
  const { title, text, img, id } = props;
  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: {
      title,
      text,
    },
  });

  const [editMode, setEditMode] = useState(false);
  const [edit, setEdit] = useState(false);
  const onSubmit = (data) => {
    updateColor({ variables: { id, title: data.title, text: data.text } });
    setEditMode(!editMode);

  };
  const [deleted, setDelete] = useState(false);

  return (
    <>

      {deleted !== true ? (
        <Wrapper>
    <OutsideClickHandler
      onOutsideClick={() => {
        setEditMode();
      }}
    >
              <form onSubmit={handleSubmit(onSubmit)}>
            <Image>
              <Img src={img} />
            </Image>
            {editMode ? (
              <TitleInput name="title" ref={register} />
            ) : (
              <Title>{title}</Title>
            )}
            {editMode ? (
              <>
                <TextInput name="text" ref={register} />
                <button type="submit" id="SaveButton">
                  Save
                </button>
              </>
            ) : (
              <Text>{text}</Text>
              
            )}
            {editMode && (
              <button
                onClick={() => {
                  setEditMode(!editMode);
                }}
              >
                Cancel
              </button>
            )}
          </form>

          <EditButton
            onClick={() => {
              setEdit(!edit);
            }}
          >
            ...
          </EditButton>
          {edit === true ? (
            <ButtonsWrapper>
              <button
                onClick={() => {
                  setEditMode(!editMode);
                  setEdit(!edit);
                }}
              >
                <img src={EditImg} className="App-edit" alt="edit" /> Edit
              </button>
              <button
                onClick={() => {              
                  deleteColor({ variables: { id } });
                  setEdit(!edit);              
                }}
              >
                <img src={DeleteImg} className="App-delete" alt="delete" />
                Delete
              </button>
            </ButtonsWrapper>
          ) : null}
    </OutsideClickHandler>
 
          
        </Wrapper>
      ) : null}
    </>
  );
};
export default Box;
