import React, { useEffect, useState } from 'react';
import { GrBook } from 'react-icons/gr';
// import WordDef from './WordDef';

const Dictionary = (props) => {
	const [tabIsExpanded, setTabIsExpanded] = useState(false);

	const bookIcon = <GrBook size={24} />;

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
				<div>
					<button onClick={openOrCloseDict}>I'm open now!</button>
				</div>
			)}
		</div>
	);
};

export default Dictionary;
