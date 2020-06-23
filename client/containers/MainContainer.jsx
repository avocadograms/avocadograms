import React from 'react';
import Navbar from '../components/Navbar.jsx';
import GameContainer from './GameContainer.jsx';
import Dictionary from '../components/Dictionary.jsx';

function MainContainer() {
	return (
		<div id="mainContainer">
			<Navbar />
			<GameContainer />
			<Dictionary />
		</div>
	);
}

export default MainContainer;
