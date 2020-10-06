import React, { useState } from 'react';
import { Wrapper, Edit, Image, Title, Text, Img } from './Box.style';

const Box = (props) => {
  const { title, text, img, loading, error } = props;
  const [editedTitle, setTitle] = useState(title);
  return (
    <Wrapper>
      <Edit
        value={editedTitle}
        onInput={(e) => setTitle(e.target.value)}
      ></Edit>
      <Image>
        <Img src={img} />
      </Image>
      <Title>{editedTitle}</Title>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Box;
