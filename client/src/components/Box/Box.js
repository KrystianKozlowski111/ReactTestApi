import React, { useState } from 'react';
import EditImg from '../../assets/images/edit.png';
import DeleteImg from '../../assets/images/delete.png';
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
const Box = (props) => {
  const { title, text, img, loading, error } = props;
  const [editMode, setEditMode] = useState(false);
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      title,
      text,
    },
  });
  const onSubmit = (data) => {
    setTitle(data.title);
    setText(data.text);
    setEditMode(!editMode);
  };
  const [deleted, setDelete] = useState(false);
  const [editedTitle, setTitle] = useState(title);
  const [editedText, setText] = useState(text);

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
              <Title>{editedTitle}</Title>
            )}
            {editMode ? (
              <>
                <TextInput name="title" name={'text'} ref={register} />
                <button type="submit" id="SaveButton">
                  Save
                </button>
              </>
            ) : (
              <Text>{editedText}</Text>
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
