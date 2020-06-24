import React, { useState, useEffect } from 'react';
import Tiles from '../components/Tiles.jsx';
import letterList, { letterFrequencies } from '../constants/letterPool';

function TilesContainer() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const cache = { ...letterFrequencies };
    let randomLetters = [];
    while (randomLetters.length < 20) {
      let randomNum = Math.floor(Math.random() * (letterList.length - 1));
      if (cache[letterList[randomNum]] !== 0) {
        randomLetters.push(letterList[randomNum]);
        cache[letterList[randomNum]] -= 1;
      }
    }
    setLetters(randomLetters);
  }, []);

  const tiles = letters.map((letter, i) => <Tiles letter={letter} key={`${letters}${i}`} />);
  return <div id='tilesContainer'> {tiles} </div>;
}

export default TilesContainer;
