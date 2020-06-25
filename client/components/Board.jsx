import React from 'react';
import AlertBox from '../components/AlertBox.jsx';

function Board({ alertNumIslands, toggleAlertNumIslands }) {
  return (
    <div id='board'>
      {alertNumIslands[0] ? (
        <AlertBox alertNumIslands={alertNumIslands} toggleAlertNumIslands={toggleAlertNumIslands} />
      ) : null}
    </div>
  );
}

export default Board;
