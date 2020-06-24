import React from 'react';
import Board from '../components/Board.jsx';
import TilesContainer from './TilesContainer.jsx';

function GameContainer() {
  return (
    <div id='gameContainer'>
      <Board />
      <TilesContainer />
    </div>
  );
}

export default GameContainer;
