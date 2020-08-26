import React from 'react';
import classes from './CommandPanel.module.css';
import WithClass from '../../../hoc/WithClass';

const CommandPanel = (props) => {
  return (
    <WithClass class={classes.Command}>
      <p>This is a Command Pannel - Name: {props.name}</p>
      <p>{props.active ? 'Activated' : 'Deactivated'}</p>

      {props.mainframe ? (
        <button onClick={props.click}>Notify of Mainframe Malfunction</button>
      ) : null}
      <button onClick={props.abort}>Abort</button>
    </WithClass>
  );
};

export default React.memo(CommandPanel);
