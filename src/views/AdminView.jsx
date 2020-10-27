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
  fetchProducts,
  misc,
}) => (
  <div className={styles.wrapper}>
    <AdminNavbar
      misc={misc}
      signOut={signOut}
      changeView={changeView}
      currentDisplay={currentDisplay}
    />
    <AdminCurrentView
      fetchProducts={fetchProducts}
      changeView={changeView}
      currentDisplay={currentDisplay}
      addUser={addUser}
      misc={misc}
    />
  </div>
);

export default AdminView;
