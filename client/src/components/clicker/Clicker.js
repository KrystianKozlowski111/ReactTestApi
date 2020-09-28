import React from 'react';
import { useState, useEffect } from 'react';
import GetColor from '../apollo';
import { Wrapper, Wrapper2 } from '../flex/FlexStyles.js';
function Click() {
  useEffect(() => {
    document.title = `Color Id ${count}`;
  });
  const [count = 1, setCount] = useState(1);
  if (count > 3) {
    setCount(1);
  }
  console.log(GetColor);
  return (
    <div className="Red">
      <button onClick={() => setCount(count + 1)}>Color Changer</button>
      <Wrapper>
        <Wrapper2>
          <GetColor id={count} />
        </Wrapper2>
      </Wrapper>
    </div>
  );
}
export default Click;
