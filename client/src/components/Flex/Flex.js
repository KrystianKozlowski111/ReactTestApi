import React, { useState } from 'react';
import { Wrapper, Search } from './Flex.style';
import Box from '../Box';
import Loading from '../Loading';

const Flex = (props) => {
  const { updateColor, loading, state, deleteColor } = props;

  const [color, setColor] = useState('');

  return (
    <div>
      <Search
        defaultValue={color}
        onInput={(e) => setColor(e.target.value)}
      ></Search>

      <Wrapper>
        <Loading loading={loading} />

        {state.getColors.length > 0 &&
          state.getColors.map((item) => {
            if (
              item.title.toString().toLowerCase().includes(color) ||
              (item.title.toString().includes(color) && item.title !== '')
            )
              return (
                <Box
                  deleteColor={deleteColor}
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
