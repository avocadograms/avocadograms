import React, { useState, useEffect } from 'react';

function CheckWords() {
  const [boardPosition, setBoardPosition] = useState([]);
  const [boardDimensions, setBoardDimensions] = useState([]);

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

  useEffect(() => {
    const element = document.querySelector('#board');
    const dimensions = {
      height: element.offsetHeight,
      width: element.offsetWidth,
    };
    setBoardDimensions([dimensions.height, dimensions.width]);
  }, []);

  const wordsOnBoard = () => {
    const maxTop = boardPosition[0] + boardDimensions[0];
    const maxLeft = boardPosition[1] + boardDimensions[1];
    const tiles = document.querySelectorAll('.tiles');
    const tilesArray = Array.apply(null, tiles).filter(tile => {
      const tileTransform = tile.style.transform;
      const tileTransformTop = Number(
        tileTransform.slice(tileTransform.indexOf(' ') + 1, tileTransform.length - 3)
      );
      const tileTransformLeft = Number(
        tileTransform.slice(tileTransform.indexOf('(') + 1, tileTransform.indexOf('p'))
      );
      const tileTop = tile.offsetTop + tileTransformTop;
      const tileLeft = tile.offsetLeft + tileTransformLeft;
      return (
        tileTop > boardPosition[0] &&
        tileTop < maxTop - tile.offsetHeight &&
        tileLeft > boardPosition[1] &&
        tileLeft < maxLeft - tile.offsetWidth
      );
    });
    console.log(tilesArray);
  };

  return (
    <div id='checkWords'>
      <button type='button' onClick={wordsOnBoard}>
        check your words
      </button>
      <div>
        {`top postion of board: ${boardPosition[0]} and left position of board: ${boardPosition[1]}`}
      </div>
    </div>
  );
}

export default CheckWords;
