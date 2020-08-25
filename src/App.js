import React, { useState } from 'react';
import classes from './App.module.css';
import Notification from './components/Notification/Notification';
import Cockpit from './components/Cockpit/Cockpit';
import CommandPanels from './components/CommandPanels/CommandPanels';

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
    const misState = [...missileState.commands];
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
    let commands = [...missileState.commands];
    commands = commands.filter((com) => com.id !== key);
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
        <CommandPanels
          commands={missileState.commands}
          abort={mainframeHandler}
          delete={deleteCommandHandler}
        />
      ) : null}
    </div>
  );
}

export default App;
