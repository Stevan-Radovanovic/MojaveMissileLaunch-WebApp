import React from 'react';

const notification = (props) => {
  return (
    <div>
      <p>This is a Two-Way Binding Notification Panel</p>
      <input
        type="text"
        onChange={props.changeLatestNotification}
        value={props.notification}
      ></input>
      <p>{props.notification}</p>
      <hr></hr>
    </div>
  );
};

export default notification;
