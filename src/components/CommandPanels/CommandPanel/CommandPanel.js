import React from 'react';
import classes from './CommandPanel.module.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';

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

CommandPanel.propTypes = {
  name: PropTypes.string,
  click: PropTypes.func,
  abort: PropTypes.func,
  active: PropTypes.bool,
};

export default React.memo(CommandPanel);
