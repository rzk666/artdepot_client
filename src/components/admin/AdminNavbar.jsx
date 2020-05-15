import React from 'react';
// Components
import Button from 'react-bootstrap/Button';
// Dictioneries
import { ADMIN_DISPLAYS } from '../../controllers/AdminController';
// Utils
import classnames from 'classnames';
// Libs
import { app } from '../../common/config';
// Styles
import styles from './AdminNavbar.module.scss';

// ----- Consts ----- //
const { cdn } = app;

// Help Components
const NavButton = ({ onClick, isActive, children }) => (
  <div
    className={classnames(styles.nav_button, { [styles.isActive]: isActive })}
    onClick={() => onClick()}
  >
    <img
      src={`${cdn}/${children}.svg`}
      alt=""
      className={styles.image}
    />
    {children}
  </div>
);

const AdminNavbar = ({
  signOut,
  changeView,
  currentDisplay,
}) => {
  const MenuButtons = Object.keys(ADMIN_DISPLAYS).map((display) => (
    <NavButton
      key={`${display}_key`}
      onClick={() => changeView(display)}
      isActive={currentDisplay === ADMIN_DISPLAYS[display]}
    >
      {ADMIN_DISPLAYS[display]}
    </NavButton>
  ));
  return (
    <div className={styles.nav_container}>
      <div className={styles.logo_container}>
        <img
          src={`${cdn}/logo.png`}
          alt="Admin Logo"
          className={styles.image}
        />
      </div>
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
