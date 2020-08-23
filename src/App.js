import React, { useState } from 'react';
import './App.css';
import CommandPanel from './CommandPanel/Command-panel';

function App() {
  const [missileState, setState] = useState({
    commands: [
      { name: 'Launch Commands', active: false },
      { name: 'Mainframe', active: false },
      { name: 'Cabin Pressure', active: false },
      { name: 'Vital Signs', active: false },
    ],
  });

  const mainframeHandler = () => {
    setState({
      commands: [
        {
          name: 'Launch Commands',
          active: !missileState.commands[0].active,
        },
        { name: 'Mainframe', active: !missileState.commands[1].active },
        {
          name: 'Cabin Pressure',
          active: !missileState.commands[2].active,
        },
        { name: 'Vital Signs', active: !missileState.commands[3].active },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Mojave Missile Launch</h1>
      <CommandPanel
        name={missileState.commands[0].name}
        active={missileState.commands[0].active}
      />
      <CommandPanel
        name={missileState.commands[1].name}
        active={missileState.commands[1].active}
      >
        Mainframe Deactivated
      </CommandPanel>
      <CommandPanel
        name={missileState.commands[2].name}
        active={missileState.commands[2].active}
      />
      <CommandPanel
        name={missileState.commands[3].name}
        active={missileState.commands[3].active}
      />
      <button onClick={mainframeHandler}>Power On/Off</button>
    </div>
  );
}

export default App;
