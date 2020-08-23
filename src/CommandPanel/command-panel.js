import React from 'react';
import './Command-panel.css';

const commandPanel = (props) => {
  return (
    <div className="Command">
      <p>This is a Command Pannel - Name: {props.name}</p>
      <p>{props.active ? 'Activated' : 'Deactivated'}</p>
      <button
        disabled={!props.mainframe || !props.active}
        onClick={props.click}
      >
        Notify of Mainframe Malfunction
      </button>
    </div>
  );
};

export default commandPanel;
