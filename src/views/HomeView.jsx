import React from 'react';
// Components
import Button from 'react-bootstrap/Button';
import Loader from '../components/common/Notifications/Loader';
// Styles
import styles from './Home.module.scss';


const HomeView = ({
  products,
  auth,
  signOut,
}) => {
  const x = 5;
  return (
    <div className={styles.wrapper}>
      <div className={styles.temp_container}>
        {auth.isLoggedIn
          && (
          <Button
            variant="danger"
            className={styles.sign_out_btn}
            onClick={() => signOut()}
          >
            התנתק
          </Button>
          )}
        <Loader />
      </div>
    </div>
  );
};

export default HomeView;
