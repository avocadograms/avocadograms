import React from 'react';
import Navbar from '../components/Navbar.jsx';
import GameContainer from './GameContainer.jsx';

function MainContainer() {
  return (
    <div id='mainContainer'>
      <Navbar />
      <GameContainer />
    </div>
  );
}

export default MainContainer;
