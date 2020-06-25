import React from 'react';

function AlertBox({ alertNumIslands, toggleAlertNumIslands }) {
  return (
    <div id='alertBox'>
      <h3>Alert Box</h3>
      <p> {alertNumIslands[1]} </p>
      <button onClick={() => toggleAlertNumIslands([false, ''])}> Dismiss </button>
    </div>
  );
}

export default AlertBox;
