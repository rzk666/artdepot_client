import React from 'react';
// Components
import Button from 'react-bootstrap/Button';
// Dictioneries
import { ADMIN_DISPLAYS } from '../../controllers/AdminController';
// Styles
import styles from './AdminNavbar.module.scss';

// Help Components

const AdminNavbar = ({
  signOut,
  changeView,
}) => {
  const MenuButtons = Object.keys(ADMIN_DISPLAYS).map((display) => (
    <Button
      variant="info"
      className={styles.nav_button}
      onClick={() => changeView(display)}
    >
      {ADMIN_DISPLAYS[display]}
    </Button>
  ));
  return (
    <div className={styles.nav_container}>
      <div className={styles.buttons_container}>
        {MenuButtons}
      </div>
      <Button
        onClick={() => signOut()}
        variant="danger"
        className={styles.sign_out_btn}
      >
        התנתק
      </Button>
    </div>
  );
};

export default AdminNavbar;
