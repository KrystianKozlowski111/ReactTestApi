import React, { useState } from 'react';
import { Wrapper, Edit, Image, Title, Text, Img } from './Box.style';
import { useForm } from 'react-hook-form';
const Box = (props) => {
  const { title, text, img, loading, error } = props;

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    let title1 = data.title;
    console.log(title1);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="title" defaultValue={title} ref={register} />

        <input type="submit" />
      </form>

      <Image>
        <Img src={img} />
      </Image>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Box;
