import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import GameContainer from './GameContainer.jsx';
import Dictionary from '../components/Dictionary.jsx';

function MainContainer() {
	const [wordsArray, setWordsArray] = useState([]);

	useEffect(() => {
		console.log('wordsArr in MainContainer: ', wordsArray);
	}, [wordsArray]);

	return (
		<div id="mainContainer">
			<Navbar />
			<GameContainer wordsArray={wordsArray} setWordsArray={setWordsArray} />
			<Dictionary wordsArray={wordsArray} />
		</div>
	);
}

export default MainContainer;
