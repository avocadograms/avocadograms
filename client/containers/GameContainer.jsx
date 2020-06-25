import React, { useState, useEffect } from 'react';
import TilesTracker from '../components/TilesTracker.jsx';
import GameplayFunctions from '../components/GameplayFunctions.jsx';
import Board from '../components/Board.jsx';
import TilesContainer from './TilesContainer.jsx';
import PlayerTab from '../components/PlayerTab.jsx';
import letterList, { letterFrequencies } from '../constants/letterPool';

function GameContainer({ setWordsArray }) {
	const [letters, setLetters] = useState([]);
	const [onBoardCount, setOnBoardCount] = useState(0);
	const [letterPool, setLetterPool] = useState(letterFrequencies);
	const [alertNumIslands, toggleAlertNumIslands] = useState([false, '']);

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

	return (
		<div id="gameContainer">
			<div>
				<TilesTracker
					totalLetters={letters.length}
					onBoardCount={onBoardCount}
				/>
				<GameplayFunctions
					setWordsArray={setWordsArray}
					setOnBoardCount={setOnBoardCount}
					toggleAlertNumIslands={toggleAlertNumIslands}
				/>
				<div id="players-div">{/* <PlayerTab username={'Keiran'} /> */}</div>
			</div>
			<Board
				alertNumIslands={alertNumIslands}
				toggleAlertNumIslands={toggleAlertNumIslands}
			/>
			<TilesContainer letters={letters} />
		</div>
	);
}

export default GameContainer;
