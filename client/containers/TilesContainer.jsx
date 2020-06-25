import React from 'react';
import Tiles from '../components/Tiles.jsx';

function TilesContainer({ letters }) {
  const tiles = letters.map((letter, i) => <Tiles letter={letter} key={`${letters}${i}`} />);
  return <div id='tilesContainer'> {tiles} </div>;
}

export default TilesContainer;
