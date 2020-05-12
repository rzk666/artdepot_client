import React from 'react';
// Styles
import styles from './Layout.module.scss';

const Layout = ({children}) => {
  const x = 5;
  return (
      <div className={styles.layout}>
        {children}
      </div>
  );
};

export default Layout;
