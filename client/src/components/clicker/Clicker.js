import React from 'react';
import { useState, useEffect } from 'react';

function Click() {
  useEffect(() => {
    document.title = `Kliknięto ${count} razy`;
  });
  const [count, setCount] = useState(0);

  return (
    <div className="Red">
      <p>Kliknięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>Kliknij mnie</button>
    </div>
  );
}
export default Click;
