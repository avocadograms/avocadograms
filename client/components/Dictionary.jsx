import React, { useEffect, useState } from 'react';
import { FaBookOpen, FaBook } from 'react-icons/fa';
import SearchWord from './SearchWord.jsx';
import WordDef from './WordDef.jsx';

const Dictionary = (props) => {
	const [tabIsExpanded, setTabIsExpanded] = useState(false);

	const bookIcon = <FaBook className="book-icon" size={26} />;
	const openBookIcon = <FaBookOpen className="book-icon open-book" size={24} />;

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
						<WordDef word="dog" />
						<WordDef word="cat" />
						<WordDef word="dog" />
						<WordDef word="cat" />
						<WordDef word="dog" />
						<WordDef word="cat" />
					</div>
				</div>
			)}
		</div>
	);
};

export default Dictionary;
