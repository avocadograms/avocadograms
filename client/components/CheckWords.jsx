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

  const getTilePosition = tile => {
    const tileTransform = tile.style.transform;
    const tileTransformTop = Number(
      tileTransform.slice(tileTransform.indexOf(' ') + 1, tileTransform.length - 3)
    );
    const tileTransformLeft = Number(
      tileTransform.slice(tileTransform.indexOf('(') + 1, tileTransform.indexOf('p'))
    );
    const tileTop = tile.offsetTop + tileTransformTop;
    const tileLeft = tile.offsetLeft + tileTransformLeft;
    return [tileTop, tileLeft];
  };

  const tilesOnBoard = () => {
    const maxTop = boardPosition[0] + boardDimensions[0];
    const maxLeft = boardPosition[1] + boardDimensions[1];
    const tiles = document.querySelectorAll('.tiles');
    const tilesArray = Array.apply(null, tiles).filter(tile => {
      const tilePosition = getTilePosition(tile);
      return (
        tilePosition[0] > boardPosition[0] &&
        tilePosition[0] < maxTop - tile.offsetHeight &&
        tilePosition[1] > boardPosition[1] &&
        tilePosition[1] < maxLeft - tile.offsetWidth
      );
    });
    const lettersAndPositions = tilesArray.map(tile => {
      const tilePosition = getTilePosition(tile);
      return {
        letter: tile.innerText,
        position: {
          top: tilePosition[0],
          left: tilePosition[1],
        },
      };
    });
    return lettersAndPositions;
  };

  const wordsOnBoard = () => {
    const tiles = tilesOnBoard();

    const tileTemplate = document.querySelector('.tiles');
    const boardGrid = new Array(Math.floor(boardDimensions[1] / tileTemplate.offsetWidth));
    for (let i = 0; i < boardGrid.length; i++) {
      boardGrid[i] = new Array(Math.floor(boardDimensions[0] / tileTemplate.offsetHeight)).fill(
        '-'
      );
    }

    for (let tile of tiles) {
      const gridY = Math.floor((tile.position.top - boardPosition[0]) / tileTemplate.offsetHeight);
      const gridX = Math.floor((tile.position.left - boardPosition[1]) / tileTemplate.offsetWidth);
      boardGrid[gridY][gridX] = tile.letter;
    }

    const islands = numIslands(JSON.parse(JSON.stringify(boardGrid)));
    if (islands > 1) {
      console.log('Please connect all of your tiles!');
      return;
    } else if (islands < 1) {
      console.log('You need to add some tiles to the board!');
      return;
    } else {
      console.log('checking words');
      return playedWords(boardGrid);
    }
  };

  const playedWords = grid => {
    const words = [];
    for (let i = 0; i < grid.length; i++) {
      let wordHor = '';
      let wordVert = '';
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] !== '-') {
          wordHor += grid[i][j];
        }
        if (grid[j][i] !== '-') {
          wordVert += grid[j][i];
        }
        if (grid[i][j] === '-' || j === grid[i].length - 1) {
          if (wordHor.length > 1) {
            words.push(wordHor);
          }
          wordHor = '';
        }
        if (grid[j][i] === '-' || i === grid.length - 1) {
          if (wordVert.length > 1) {
            words.push(wordVert);
          }
          wordVert = '';
        }
      }
    }
    console.log(words);
    return words;
  };

  const numIslands = grid => {
    let num = 0;
    const removeLetter = (i, j) => {
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '-') return;
      grid[i][j] = '-';
      removeLetter(i - 1, j);
      removeLetter(i + 1, j);
      removeLetter(i, j - 1);
      removeLetter(i, j + 1);
      return 1;
    };

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] !== '-') {
          num += removeLetter(i, j);
        }
      }
    }
    return num;
  };

  return (
    <div id='checkWords'>
      <button type='button' onClick={wordsOnBoard}>
        check your words
      </button>
      <div>
        {`top position of board: ${boardPosition[0]} and left position of board: ${boardPosition[1]}`}
      </div>
    </div>
  );
}

export default CheckWords;
