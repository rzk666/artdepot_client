import React from 'react';
// Components
import AdminNavbar from '../components/admin/AdminNavbar';
import AdminCurrentView from '../components/admin/AdminCurrentView';
// Styles
import styles from './Admin.module.scss';

// Help Components

const AdminView = ({
  addUser,
  signOut,
}) => {
  const x = 5;
  return (
    <div className={styles.wrapper}>
      <AdminNavbar signOut={signOut} />
      {/* <AdminCurrentView
        addUser={addUser}
      /> */}
    </div>
  );
};

export default AdminView;
