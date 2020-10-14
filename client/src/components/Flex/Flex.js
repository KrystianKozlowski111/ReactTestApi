import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Wrapper, Search } from './Flex.style';
import Box from '../Box';
import Loading from '../Loading';

const GET_COLORS = gql`
  query getColors {
    getColors {
      id
      title
      text
      img
    }
  }
`;

const UPDATE_COLOR = gql`
  mutation updateColor($id: ID!, $title: String!, $text: String!) {
    updateColor(id: $id, title: $title, text: $text) {
      id
      title
      text
    }
  }
`;
const Flex = () => {

  const { loading, data } = useQuery(GET_COLORS/*,{onCompleted: (data) => { setState(data);console.log(state);console.log(data);}}*/);
  const [updateColor,data1] = useMutation(UPDATE_COLOR,{onCompleted: (data1) => { setState(data1);console.log(state);console.log(data1);}});
  const [state, setState] = useState(data1);
  const [color, setColor] = useState('');

  return (
    
    <div>
      <Search
        defaultValue={color}
        onInput={(e) => setColor(e.target.value)}
      ></Search>

      <Wrapper>
        <Loading loading={loading} />
        
        
{data &&
          data.getColors &&
          data.getColors.length > 0 &&
          data.getColors.map((item) => {
            if (
              item.title.toString().toLowerCase().includes(color) ||
              (item.title.toString().includes(color) && item.title !== '')
            )
              return (
                
                <Box
                  updateColor={updateColor}
                  title={item.title}
                  text={item.text}
                  img={item.img}
                  id={item.id}
                  key={item.id}
                />
              );
          })}

       
      </Wrapper>
    </div>
  );
};

export default Flex;
