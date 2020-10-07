import React, { useState } from 'react';
import { Wrapper, Edit, Image, Title, Text, Img } from './Box.style';
import { useForm } from 'react-hook-form';
const Box = (props) => {
  const { title, text, img, loading, error } = props;
  const [editMode, setEditMode] = useState(false);
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
  const [editedTitle, setTitle] = useState(title);
  const [editedText, setText] = useState(text);
  return (
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
          setEditMode(!editMode);
        }}
      >
        editMode {editMode ? 'true' : 'false'}
      </button>
    </Wrapper>
  );
};
export default Box;
