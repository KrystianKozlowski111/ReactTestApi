import React from 'react';
import { Wrapper, Image, Title, Text, Img } from './Box.style';
import img1 from '../../assets/images/1.png';
const Box = (props) => {
  const { title, text, img, loading, error } = props;
  return (
    <Wrapper>
      <Image>
        <Img src={img} />
      </Image>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Box;
