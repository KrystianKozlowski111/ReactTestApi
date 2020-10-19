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
import OutsideClickHandler from 'react-outside-click-handler';

const Box = (props) => {
  const { title, text, img, id, deleteColor, updateColor } = props;
  const { register, handleSubmit, reset } = useForm({
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
    reset({ title: data.title, text: data.text });
  };

  return (
    <>
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
    </>
  );
};
export default Box;
