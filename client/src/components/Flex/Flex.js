import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Wrapper } from './Flex.style';
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

  return (
    <div>
      <Wrapper>
        <Loading loading={loading} />
        {data &&
          data.getColors &&
          data.getColors.length > 0 &&
          data.getColors.map((item) => (
            <Box
              title={item.title}
              text={item.text}
              img={item.img}
              key={item.id}
            />
          ))}
      </Wrapper>
    </div>
  );
};

export default Flex;
