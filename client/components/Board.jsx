import React, { useState, useEffect } from 'react';

function Board() {
  const [boardPosition, setBoardPosition] = useState([]);
  useEffect(() => {
    function updateBoardPosition() {
      const element = document.querySelector('#board');
      const position = {
        top: element.offsetTop,
        left: element.offsetLeft,
      };
      setBoardPosition([position.top, position.left]);
    }
    if (!boardPosition.length) updateBoardPosition();
    window.addEventListener('resize', updateBoardPosition);
  }, []);

  return (
    <div id='board'>
      {`top postion of board: ${boardPosition[0]} and left position of board: ${boardPosition[1]}`}
    </div>
  );
}

export default Board;
