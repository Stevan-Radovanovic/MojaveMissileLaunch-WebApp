import React from 'react';
import classes from './Command-panel.module.css';

const commandPanel = (props) => {
  return (
    <div className={classes.Command}>
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
