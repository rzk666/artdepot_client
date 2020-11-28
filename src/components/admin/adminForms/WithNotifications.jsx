import React, { useState, useEffect } from 'react';
// Styles
import styles from './WithNotifications.module.scss';
// Componenets
import Notifications from './Notifications';

const WithNotifications = (Component) => (props) => {
  const x = 5;

  return (
    <>
      <Component />
      <Notifications />
    </>
  );
};

export default WithNotifications;
