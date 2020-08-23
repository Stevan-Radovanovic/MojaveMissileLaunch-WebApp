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

  const [activeState, setActiveState] = useState({
    activated: false,
  });

  const mainframeHandler = () => {
    setMissileState({
      commands: [
        {
          name: 'Launch Commands',
          active: !missileState.commands[0].active,
          mainframe: false,
        },
        {
          name: 'Mainframe',
          active: !missileState.commands[1].active,
          mainframe: true,
        },
        {
          name: 'Cabin Pressure',
          active: !missileState.commands[2].active,
          mainframe: false,
        },
        {
          name: 'Vital Signs',
          active: !missileState.commands[3].active,
          mainframe: false,
        },
      ],
    });
    setActiveState({
      activated: !activeState.activated,
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
      {activeState.activated ? (
        <div>
          {missileState.commands.map((command) => {
            return (
              <CommandPanel
                name={command.name}
                active={command.active}
                mainframe={command.mainframe}
                click={mainframeHandler}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default App;
