import React from 'react';
import Navbar from './components/Navbar';
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
    </div>
  );
}
export default App;
