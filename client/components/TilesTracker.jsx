import React from 'react';

function TilesTracker({ totalLetters, onBoardCount }) {
  return (
    <div id='tilesTracker'>
      <h3> Tiles Tracker </h3>
      <p>
        <b>Tiles Remaining: </b> {`${onBoardCount}/${totalLetters}`}
      </p>
    </div>
  );
}

export default TilesTracker;
