import React, { useState, useEffect } from 'react';
import TilesTracker from '../components/TilesTracker.jsx';
import GameplayFunctions from '../components/GameplayFunctions.jsx';
import Board from '../components/Board.jsx';
import TilesContainer from './TilesContainer.jsx';
import letterList, { letterFrequencies } from '../constants/letterPool';

function GameContainer({ setWordsArray }) {
  const [letters, setLetters] = useState([]);
  const [letterPool, setLetterPool] = useState(letterFrequencies);

  useEffect(() => {
    let randomLetters = [];
    while (randomLetters.length < 20) {
      let randomNum = Math.floor(Math.random() * (letterList.length - 1));
      const letter = letterList[randomNum];
      if (letterPool[letter] !== 0) {
        randomLetters.push(letter);
        const obj = {};
        obj[letter] = letterPool[letter] - 1;
        setLetterPool({ ...letterPool, ...obj });
      }
    }
    setLetters(randomLetters);
  }, []);

  return (
    <div id='gameContainer'>
      <div>
        <TilesTracker totalLetters={letters.length} />
        <GameplayFunctions setWordsArray={setWordsArray} />
      </div>
      <Board />
      <TilesContainer letters={letters} />
    </div>
  );
}

export default GameContainer;
