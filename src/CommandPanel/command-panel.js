import React from 'react';

const commandPanel = (props) => {
  return (
    <div>
      <p>This is a Command Pannel - Name: {props.name}</p>
      <p>{props.active ? 'Activated' : 'Deactivated'}</p>
    </div>
  );
};

export default commandPanel;
