import React from 'react';
import CommandPanel from './CommandPanel/CommandPanel';

const commandPanels = (props) => {
  return (
    <div>
      {props.commands.map((command) => {
        return (
          <CommandPanel
            name={command.name}
            active={command.active}
            mainframe={command.mainframe}
            key={command.id}
            click={props.abort}
            abort={(event) => props.delete(event, command.id)}
          />
        );
      })}
    </div>
  );
};

export default commandPanels;
