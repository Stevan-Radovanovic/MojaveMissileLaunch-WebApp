import React from 'react';

const cockpit = (props) => {
  return (
    <div>
      <h1>Mojave Missile Launch</h1>
      <button onClick={props.handler}>Power On/Off</button>
      <hr></hr>
    </div>
  );
};

export default cockpit;
