import React from 'react';
import './App.css';
import CommandPanel from './CommandPanel/Command-panel';

function App() {
  const mainframeHandler = () => {
    console.log('Mainframe Activated');
  };

  return (
    <div className="App">
      <h1>Mojave Missile Launch</h1>
      <CommandPanel version="1.0" />
      <CommandPanel version="1.1">Mainframe Deactivated</CommandPanel>
      <CommandPanel version="1.2" />
      <CommandPanel version="1.3" />
      <button onClick={mainframeHandler}>Activate Mainframe</button>
    </div>
  );
}

export default App;
