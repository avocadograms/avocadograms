import React, { useState } from 'react';
import Tiles from '../components/Tiles.jsx';

function TilesContainer() {
  const [letters, setLetters] = useState(['A', 'B', 'D', 'R', 'T', 'H', 'J', 'W', 'A', 'Q', 'O']);

  const tiles = letters.map((letter, i) => <Tiles letter={letter} key={`${letters}${i}`} />);
  return <div id='tilesContainer'> {tiles} </div>;
}

export default TilesContainer;
