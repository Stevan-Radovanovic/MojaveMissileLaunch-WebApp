import React, { useState } from 'react';
import classes from './App.module.css';
import CommandPanel from './components/CommandPanel/Command-panel';
import Notification from './components/Notification/Notification';
import Cockpit from './components/Cockpit/Cockpit';

function App() {
  const [missileState, setMissileState] = useState({
    commands: [
      { id: 1, name: 'Launch Commands', active: false, mainframe: false },
      { id: 2, name: 'Mainframe', active: false, mainframe: true },
      { id: 3, name: 'Cabin Pressure', active: false, mainframe: false },
      { id: 4, name: 'Vital Signs', active: false, mainframe: false },
    ],
  });

  const [notifyState, setNotifyState] = useState({
    notification: '',
  });

  const [activeState, setActiveState] = useState({
    activated: false,
  });

  const mainframeHandler = () => {
    const misState = missileState.commands;
    misState.forEach((command) => (command.active = !command.active));
    setMissileState({
      commands: misState,
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

  const deleteCommandHandler = (event, key) => {
    console.log(key);
    let commands = [...missileState.commands];
    console.log(commands);
    commands = commands.filter((com) => com.id !== key);
    console.log(commands);
    setMissileState({
      commands: commands,
    });
  };

  return (
    <div className={classes.App}>
      <Cockpit handler={mainframeHandler} />
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
                key={command.id}
                click={mainframeHandler}
                abort={(event) => deleteCommandHandler(event, command.id)}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default App;
