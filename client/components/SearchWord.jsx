import React, { useEffect, useState, useRef } from 'react';
import { GrSearch } from 'react-icons/gr';

const SearchWord = (props) => {
	const [definitionReturned, setDefinitionReturned] = useState('');
	const [hasResults, setHasResults] = useState(false);
	const [wordExists, setWordExists] = useState(true);
	const [currSearchWord, setCurrSearchWord] = useState('');
	const definitionReturnedRef = useRef(definitionReturned);

	useEffect(() => {
		if (definitionReturned.success === false) setWordExists(false);
	}, [wordExists, definitionReturned]);

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			searchForWord(currSearchWord);
		}
	};

	const searchForWord = () => {
		console.log(currSearchWord);

		fetch(`http://localhost:8080/findWord`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				word: currSearchWord,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				definitionReturnedRef.current = data;
				setHasResults(true);
				console.log('definitionReturned: ', definitionReturnedRef.current);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div id="word-search-div">
			{!hasResults ? (
				<div>
					<h3>Search for a word: </h3>
					<div id="search-input-div">
						<GrSearch size={15} />
						<input
							id="word-search-input"
							placeholder="Enter word..."
							onKeyPress={handleKeyPress}
							onChange={(event) => {
								console.log(event.target.value);
								setCurrSearchWord(event.target.value);
							}}
						></input>
						<button
							className="search-btns first-search-btn"
							onClick={searchForWord}
							type="submit"
						>
							Search
						</button>
					</div>
				</div>
			) : (
				<div id="word-search-results-div">
					{wordExists ? (
						<div className="word-exists-div">
							{/* {definitionReturnedRef.current.definitions[0]} */}
							Success! It is a word!
						</div>
					) : (
						<div className="no-such-word-div">Word not found!</div>
					)}

					<button
						className="search-btns search-again-btn"
						onClick={() => {
							setHasResults(false);
							setDefinitionReturned('');
						}}
					>
						Search again
					</button>
				</div>
			)}
		</div>
	);
};

export default SearchWord;
