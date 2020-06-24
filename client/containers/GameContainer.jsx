import React from 'react';
import Board from '../components/Board.jsx';
import TilesContainer from './TilesContainer.jsx';
import CheckWords from '../components/CheckWords.jsx';

function GameContainer() {
  return (
    <div id='gameContainer'>
      <Board />
      <TilesContainer />
      <CheckWords />
    </div>
  );
}

export default GameContainer;
