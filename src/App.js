import React from 'react';
import './App.css';
import CommandPanel from './CommandPanel/command-panel';

function App() {
  return (
    <div className="App">
      <h1>Mojave Missile Launch</h1>
      <CommandPanel version="1.0" />
      <CommandPanel version="1.1">This is the Mainframe</CommandPanel>
      <CommandPanel version="1.2" />
      <CommandPanel version="1.3" />
    </div>
  );
}

export default App;
