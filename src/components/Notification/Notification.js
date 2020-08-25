import React from 'react';
import classes from './Notification.module.css';

const notification = (props) => {
  return (
    <div className={classes.Notification}>
      <p>This is a Two-Way Binding Notification Panel</p>
      <input
        type="text"
        onChange={props.changeLatestNotification}
        value={props.notification}
      ></input>
      <p>{props.notification}</p>
    </div>
  );
};

export default notification;