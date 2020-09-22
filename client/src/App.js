import React from 'react';
import Navbar from './components/Navbar';
import Apollo from './reducer/Apollo';
import Section1 from './components/Section1';
import styled from 'styled-components';

function App() {
  const Wrapper = styled.section`
    padding: 20%;
    background: #ccc;
  `;
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Wrapper />
      <Apollo />
    </div>
  );
}
export default App;
