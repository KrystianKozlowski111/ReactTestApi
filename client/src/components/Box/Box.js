import React, { useState, useEffect } from 'react';
import EditImg from '../../assets/images/edit.png';
import DeleteImg from '../../assets/images/delete.png';
import { gql, useQuery, useMutation } from '@apollo/client';
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
  const [updateColor] = useMutation(UPDATE_COLOR);
  const [deleteColor] = useMutation(DELETE_COLOR);
  const { title, text, img, id, loading, error } = props;
  const { register, handleSubmit, setValue, watch, errors, data } = useForm({
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
    //setValue([{ title: data.title }, { text: data.text }]);
  };
  const [deleted, setDelete] = useState(false);

  return (
    <>
      {deleted != true ? (
        <Wrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Image>
              <Img src={img} />
            </Image>
            {editMode ? (
              <TitleInput name="title" name={'title'} ref={register} />
            ) : (
              <Title>{title}</Title>
            )}
            {editMode ? (
              <>
                <TextInput name="title" name={'text'} ref={register} />
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

          {edit == true ? (
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
                  setDelete(!deleted);
                  deleteColor({ variables: { id } });
                  setEdit(!edit);
                }}
              >
                <img src={DeleteImg} className="App-delete" alt="delete" />
                Delete
              </button>
            </ButtonsWrapper>
          ) : null}
        </Wrapper>
      ) : null}
    </>
  );
};
export default Box;
