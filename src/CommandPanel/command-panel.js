import React from 'react';

const commandPanel = (props) => {
  return (
    <div>
      <p>This is a Command Pannel - Name: {props.name}</p>
      <p>{props.active ? 'Activated' : 'Deactivated'}</p>
      <button disabled={!props.mainframe} onClick={props.click}>
        Notify of Mainframe Malfunction
      </button>
      <hr></hr>
    </div>
  );
};

export default commandPanel;
