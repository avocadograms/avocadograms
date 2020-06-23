import React, { useEffect, useState } from 'react';
import { FaBookOpen, FaBook } from 'react-icons/fa';
// import WordDef from './WordDef';

const Dictionary = (props) => {
	const [tabIsExpanded, setTabIsExpanded] = useState(false);

	const bookIcon = <FaBook size={26} />;
	const openBookIcon = <FaBookOpen size={20} />;

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
					<h1>Hey I'm open now!</h1>
				</div>
			)}
		</div>
	);
};

export default Dictionary;
