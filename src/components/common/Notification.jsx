import React from 'react';
// Utils
import classnames from 'classnames';
// Styles
import styles from './Notification.module.scss';

const Notification = ({ type, message }) => (
  <div
    className={classnames(styles.notification, styles[type])}
  >
    {message}
  </div>
);

export default Notification;
