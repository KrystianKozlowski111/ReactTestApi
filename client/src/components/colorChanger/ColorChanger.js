import React from 'react';
import { Wrapper } from '../../globalStyles/GlobalStyles.js';
import { useState } from 'react';

function ColorChanger() {
  const [color, setColor] = useState('#ccc');
  const setBlack = () => setColor('#ccc');
  const setRed = () => setColor('Red');
  return (
    <>
      <button onClick={setBlack}>set Grey</button>
      <button onClick={setRed}>set Red</button>
      <Wrapper background={color}>
        <></>
      </Wrapper>
    </>
  );
}
export default ColorChanger;
