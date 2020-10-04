import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import { Wrapper, Section, Search } from './Flex.style';
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

const Flex = () => {
  const { loading, error, data } = useQuery(GET_COLORS);
  console.log(data);
  const [color, setColor] = useState('Red');
  return (
    <div>
      <Search value={color} onInput={(e) => setColor(e.target.value)} />

      <Wrapper>
        <Loading loading={loading} />

        {data &&
          data.getColors &&
          data.getColors.length > 0 &&
          data.getColors.map((item) => (
            <>
              {item.title === color ? (
                <Box
                  title={item.title}
                  text={item.text}
                  img={item.img}
                  key={item.id}
                />
              ) : (
                <Section />
              )}
            </>
          ))}
      </Wrapper>
    </div>
  );
};

export default Flex;
