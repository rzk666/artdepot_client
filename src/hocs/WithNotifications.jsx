import React, { useRef, useState, useEffect } from 'react';
// Components
import NotificationsContainer from '../components/common/NotificationContainer';
// Custom Hooks
import usePrevious from '../hooks/usePrevious';

// ** IMPORTANT NOTE ** //
// This was written just for practice!!
// This will be switched by a 3rd party library (like react-notifications)
// Or will be kept but delt with using useContext, so we don't need
// To drill addNotification down like crazy :)

const WithNotificationsHOC = (Component) => {
  const WithNotifications = (props) => {
    const [notifications, setNotifications] = useState([]);
    const addNotification = (notification) => setNotifications([...notifications, notification]);
    const currentNotifications = useRef();
    currentNotifications.current = notifications;
    const handleNotifications = () => {
      const newNotifications = [...currentNotifications.current];
      newNotifications.shift();
      setNotifications(newNotifications);
    };
    const previousLength = usePrevious(notifications.length);
    useEffect(() => {
      if (notifications.length && (notifications.length > previousLength)) {
        setTimeout(() => handleNotifications(), 2000);
      }
    }, [notifications]);
    return (
      <>
        <Component
          {...props}
          addNotification={addNotification}
        />
        <NotificationsContainer notifications={notifications} />
      </>
    );
  };
  return WithNotifications;
};

export default WithNotificationsHOC;
