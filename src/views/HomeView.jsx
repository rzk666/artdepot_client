import React from 'react';
// Components
import Loader from '../components/common/Notifications/Loader';
// Styles
import styles from './Home.module.scss';


const HomeView = ({
  auth,
}) => {
return (
  <div className={styles.wrapper}>
    <Loader/>
  </div>)};

export default HomeView;
