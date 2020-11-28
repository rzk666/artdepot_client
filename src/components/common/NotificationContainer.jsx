import React from 'react';
// Components
import Notification from './Notification';
// Styles
import styles from './NotificationsContainer.module.scss';

const NotificationsContainer = ({ notifications }) => (
  <div className={styles.notifications_container}>
    {notifications.map((notification) => {
      const { message, type } = notification;
      return (
        <Notification message={message} type={type} />
      );
    })}
  </div>
);

export default NotificationsContainer;
