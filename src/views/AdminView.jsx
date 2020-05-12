import React from 'react';
// Components
import Loader from '../components/common/Notifications/Loader';
// Styles
import styles from './Admin.module.scss';

// Help Components

const AdminView = ({
  auth,
}) => {
  const { isLoading } = auth;
  return (
    <div className={styles.wrapper}>
      <div>עמוד מנהל</div>
    </div>
  );
};

export default AdminView;
