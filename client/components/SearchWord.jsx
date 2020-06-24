import React, { useEffect, useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { json } from 'body-parser';

const SearchWord = (props) => {
	const [definitionReturned, setDefinitionReturned] = useState('');
	const [currSearchWord, setCurrSearchWord] = useState('');
	const [currWordResult, setCurrWordResult] = useState([]);

	useEffect(() => {
		console.log('results came');
	}, [currWordResult]);

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
				console.log('data returned: ', data);
				setCurrWordResult(data);
				console.log('currWordResult', currWordResult);
			})
			.catch((err) => console.log(err));

		setDefinitionReturned('a dog is a wonderful friend');
	};

	return (
		<div id="word-search-div">
			{!definitionReturned ? (
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
					Yay, onclick works
					<button
						className="search-btns search-again-btn"
						onClick={() => setDefinitionReturned('')}
					>
						Search again
					</button>
				</div>
			)}
		</div>
	);
};

export default SearchWord;
