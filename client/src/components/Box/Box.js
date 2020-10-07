import React, { useState } from 'react';
import { Wrapper, Edit, Image, Title, Text, Img } from './Box.style';
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
              <input name="title" name={'title'} ref={register} />
            ) : (
              <Title>{editedTitle}</Title>
            )}
            {editMode ? (
              <input name="title" name={'text'} ref={register} />
            ) : (
              <Text>{editedText}</Text>
            )}
            {editMode && <input type="submit" />}
          </form>

          <button
            onClick={() => {
              setEdit(!edit);
            }}
          >
            Edycja
          </button>

          {edit == true ? (
            <>
              <button
                onClick={() => {
                  setEditMode(!editMode);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setDelete(!deleted);
                }}
              >
                Delete
              </button>
            </>
          ) : null}
        </Wrapper>
      ) : null}
    </>
  );
};
export default Box;
