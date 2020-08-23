import React from 'react';

const commandPanel = (props) => {
  return (
    <div>
      <p>This is a Command Pannel - Version: {props.version}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default commandPanel;
