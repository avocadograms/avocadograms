import React, { useEffect, useState } from 'react';

const WordDef = (props) => {
	return (
		<div className="word-def-div">
			<h2>{props.word}</h2>
			<p>a short definition of the word</p>
		</div>
	);
};

export default WordDef;
