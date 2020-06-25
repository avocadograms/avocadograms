import React from 'react';
import Board from '../components/Board.jsx';
import TilesContainer from './TilesContainer.jsx';
import CheckWords from '../components/CheckWords.jsx';

function GameContainer(props) {
	return (
		<div id="gameContainer">
			<Board />
			<TilesContainer />
			<CheckWords
				wordsArray={props.wordsArray}
				setWordsArray={props.setWordsArray}
			/>
		</div>
	);
}

export default GameContainer;
