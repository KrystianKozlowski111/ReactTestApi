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
    }
  }
`;

const Flex = () => {
  const { loading, error, data } = useQuery(GET_COLORS);

  return (
    <div>
      <Wrapper>
        <Loading loading={loading} />
        {data &&
          data.legnth > 0 &&
          data.map((item) => (
            <Box title={item.title} text={item.text} key={item.id} />
          ))}
      </Wrapper>
    </div>
  );
};

export default Flex;
