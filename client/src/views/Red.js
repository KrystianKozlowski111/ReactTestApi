import React from 'react';
import Click from '../components/clicker';
import ColorChanger from '../components/colorChanger';
function Red() {
  return (
    <div className="Red">
      <ColorChanger></ColorChanger>
      <Click />
    </div>
  );
}
export default Red;
