import React, { useState } from 'react';
import './App.css';
import CommandPanel from './CommandPanel/Command-panel';
import Notification from './Notification/Notification';

function App() {
  const [missileState, setMissileState] = useState({
    commands: [
      { name: 'Launch Commands', active: false },
      { name: 'Mainframe', active: false, mainframe: true },
      { name: 'Cabin Pressure', active: false },
      { name: 'Vital Signs', active: false },
    ],
  });

  const [notifyState, setNotifyState] = useState({
    notification: '',
  });

  const mainframeHandler = () => {
    setMissileState({
      commands: [
        {
          name: 'Launch Commands',
          active: !missileState.commands[0].active,
        },
        {
          name: 'Mainframe',
          active: !missileState.commands[1].active,
          mainframe: true,
        },
        {
          name: 'Cabin Pressure',
          active: !missileState.commands[2].active,
        },
        { name: 'Vital Signs', active: !missileState.commands[3].active },
      ],
    });
  };

  const notifyHandler = (event) => {
    setNotifyState({
      notification: event.target.value,
    });
  };

  return (
    <div className="App">
      <h1>Mojave Missile Launch</h1>
      <button onClick={mainframeHandler}>Power On/Off</button>
      <hr></hr>
      <Notification
        notification={notifyState.notification}
        changeLatestNotification={notifyHandler}
      ></Notification>
      <br></br>
      <CommandPanel
        name={missileState.commands[0].name}
        active={missileState.commands[0].active}
      />
      <br></br>
      <CommandPanel
        name={missileState.commands[1].name}
        active={missileState.commands[1].active}
        mainframe={missileState.commands[1].mainframe}
        click={mainframeHandler}
      >
        Mainframe Deactivated
      </CommandPanel>
      <br></br>
      <CommandPanel
        name={missileState.commands[2].name}
        active={missileState.commands[2].active}
      />
      <br></br>
      <CommandPanel
        name={missileState.commands[3].name}
        active={missileState.commands[3].active}
      />
    </div>
  );
}

export default App;
