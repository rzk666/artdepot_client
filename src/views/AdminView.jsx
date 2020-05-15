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
  currentDisplay,
  changeView,
}) => {
  const x = 5;
  return (
    <div className={styles.wrapper}>
      <AdminNavbar
        signOut={signOut}
        changeView={changeView}
        currentDisplay={currentDisplay}
      />
      <AdminCurrentView
        currentDisplay={currentDisplay}
        addUser={addUser}
      />
    </div>
  );
};

export default AdminView;
