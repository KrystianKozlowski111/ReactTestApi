import React from 'react';
import Click from '../components/clicker';
import ColorChanger from '../components/colorChanger';
import { Wrapper } from '../globalStyles/GlobalStyles.js';
function Red() {
  return (
    <div className="Red">
      <Click />
      <ColorChanger></ColorChanger>
    </div>
  );
}
export default Red;
