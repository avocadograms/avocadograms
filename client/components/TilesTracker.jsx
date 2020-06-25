import React from 'react';

function TilesTracker({ totalLetters }) {
  return (
    <div id='tilesTracker'>
      <h3> Tiles Tracker </h3>
      <p>
        <b>Tiles Remaining: </b> {`tilesonBoard/${totalLetters}`}
      </p>
    </div>
  );
}

export default TilesTracker;
