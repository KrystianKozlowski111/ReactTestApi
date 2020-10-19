import React, { useState, useEffect } from 'react';
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

const DELETE_COLOR = gql`
  mutation deleteColor($id: ID!) {
    deleteColor(id: $id) {
      id
    }
  }
`;
const Box = (props) => {
  const [deleteColor] = useMutation(DELETE_COLOR, {
    onCompleted: () => {
      setDelete(!deleted);
    },
  });
  const { title, text, img, id, updateColor } = props;
  const { register, handleSubmit, reset } = useForm({
    mode: 'onBlur',
    defaultValues: {
      title,
      text,
    },
  });
  console.log(title);
  const [editMode, setEditMode] = useState(false);
  const [edit, setEdit] = useState(false);
  const onSubmit = (data) => {
    updateColor({ variables: { id, title: data.title, text: data.text } });
    setEditMode(!editMode);
    reset({ title: data.title, text: data.text });
  };
  const [deleted, setDelete] = useState(false);

  return (
    <>
      {deleted !== true ? (
        <Wrapper>
          <OutsideClickHandler
            onOutsideClick={() => {
              setEdit();
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
