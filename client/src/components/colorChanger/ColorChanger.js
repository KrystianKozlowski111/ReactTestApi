import React from 'react';
import { Wrapper } from '../../globalStyles/GlobalStyles.js';
import { useState, useEffect } from 'react';

function ColorChanger() {
  const [color, setColor] = useState('#ccc');
  const setBlack = () => setColor('#ccc');
  const setRed = () => setColor('Red');
  return (
    <div className="Red">
      <button onClick={setBlack}>set Grey</button>
      <button onClick={setRed}>set Red</button>
      <Wrapper background={color}>
        <></>
      </Wrapper>
    </div>
  );
}
export default ColorChanger;
