import React, { useEffect, useState, useRef } from 'react';
import { GoPerson } from 'react-icons/go';

const PlayerTab = (props) => {
	return (
		<div className="player-tab">
			<h2 className="player-tab-name">{props.username}</h2>
			<GoPerson className="player-icon" size={24} />
		</div>
	);
};

export default PlayerTab;
