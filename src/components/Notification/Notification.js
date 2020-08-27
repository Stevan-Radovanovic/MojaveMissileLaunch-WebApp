import React from 'react';
import classes from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = (props) => {
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

Notification.propTypes = {
  notification: PropTypes.string,
  changeLatestNotification: PropTypes.func,
};

export default React.memo(Notification);
