import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommandPanel from './CommandPanel/command-panel';

function App() {
  return (
    <div className="App">
      <h1>Mojave Missile Launch</h1>
      <CommandPanel />
      <CommandPanel />
      <CommandPanel />
      <CommandPanel />
    </div>
  );
}

export default App;
