import React from 'react';
// Components
import Button from 'react-bootstrap/Button';
// Styles
import styles from './AdminNavbar.module.scss';

// Help Components

const AdminNavbar = ({
  signOut,
}) => {
  const x = 5;
  return (
    <div className={styles.nav_container}>
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
