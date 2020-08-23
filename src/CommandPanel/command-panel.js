import React from 'react';
import './Command-panel.css';

const commandPanel = (props) => {
  return (
    <div className="Command">
      <p>This is a Command Pannel - Name: {props.name}</p>
      <p>{props.active ? 'Activated' : 'Deactivated'}</p>

      {props.mainframe ? (
        <button onClick={props.click}>Notify of Mainframe Malfunction</button>
      ) : null}
      <button onClick={props.abort}>Abort</button>
    </div>
  );
};

export default commandPanel;
