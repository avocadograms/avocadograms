import React, { useState, useEffect } from 'react';
import Tiles from '../components/Tiles.jsx';
import letterList, { letterFrequencies } from '../constants/letterPool';

function TilesContainer() {
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

  const tiles = letters.map((letter, i) => <Tiles letter={letter} key={`${letters}${i}`} />);
  return <div id='tilesContainer'> {tiles} </div>;
}

export default TilesContainer;
