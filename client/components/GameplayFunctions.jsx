import React from 'react';
import CheckWords from '../components/CheckWords.jsx';

function GameplayFunction({ setWordsArray, setOnBoardCount, toggleAlertNumIslands }) {
  return (
    <div id='gameplayFunctions'>
      <div>
        <h3> Functions </h3>
        {'Check played words: '}
        <CheckWords
          setWordsArray={setWordsArray}
          setOnBoardCount={setOnBoardCount}
          toggleAlertNumIslands={toggleAlertNumIslands}
        />
      </div>
    </div>
  );
}

export default GameplayFunction;
