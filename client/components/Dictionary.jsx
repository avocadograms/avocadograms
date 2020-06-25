import React, { useEffect, useState, useRef } from 'react';
import { FaBookOpen, FaBook } from 'react-icons/fa';
import SearchWord from './SearchWord.jsx';
import WordDef from './WordDef.jsx';

const Dictionary = (props) => {
	const [tabIsExpanded, setTabIsExpanded] = useState(false);
	const [wordDefComponents, setWordDefComponents] = useState([]);
	// const [receivedWords, setReceivedWords] = useState(false);
	const wordDefCompRef = useRef(wordDefComponents);

	const bookIcon = <FaBook className="book-icon" size={26} />;
	const openBookIcon = <FaBookOpen className="book-icon open-book" size={24} />;

	useEffect(() => {
		console.log('wordDefCompRef.current: ', wordDefCompRef.current);

		if (props.wordsArray) {
			// setWordDefComponents([]);
			wordDefCompRef.current = [];
			// setReceivedWords(true);
			JSXifyWordsArray(props.wordsArray);
		}
	}, [props.wordsArray]);

	const JSXifyWordsArray = (array) => {
		array.forEach((word) => {
			fetch(`http://localhost:8080/findWord`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					word: word.toLowerCase(),
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					// console.log('data per word: ', data);
					// console.log('data.word: ', data.word);
					if (data.word) {
						wordDefCompRef.current.push(
							<WordDef word={data.word} def={data.definitions[0].definition} />
						);
						// setWordDefComponents([
						// 	...wordDefComponents,
						// 	<WordDef word={data.word} def={data.definitions[0].definition} />,
						// ]);
					}
				})
				.catch((err) => console.log(err));
		});
	};

	const openOrCloseDict = () => {
		if (tabIsExpanded) setTabIsExpanded(false);
		else setTabIsExpanded(true);
	};

	return (
		<div id="dictionary-tab">
			{!tabIsExpanded ? (
				<div id="unexpanded-dict-tab">
					<button id="expand-dict-tab-btn" onClick={openOrCloseDict}>
						{bookIcon}
					</button>
				</div>
			) : (
				<div id="expanded-dict-tab">
					<button id="collapse-dict-tab-btn" onClick={openOrCloseDict}>
						{openBookIcon}
					</button>

					<SearchWord />

					<div id="all-words-div">
						<h3>Words on the board</h3>
						{wordDefCompRef.current}
					</div>
				</div>
			)}
		</div>
	);
};

export default Dictionary;
