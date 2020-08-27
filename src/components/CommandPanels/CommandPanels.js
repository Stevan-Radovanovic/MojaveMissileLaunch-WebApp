import React, { useEffect } from 'react';
import CommandPanel from './CommandPanel/CommandPanel';
import PropTypes from 'prop-types';

const CommandPanels = (props) => {
  useEffect(() => {
    console.log('Command Panels rendering complete...');
    return () => {
      console.log('Command Panels clean up complete...');
    };
  }, []);

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

CommandPanels.propTypes = {
  delete: PropTypes.func,
  commands: PropTypes.array,
};

export default React.memo(CommandPanels);
