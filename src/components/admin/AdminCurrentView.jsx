import React from 'react';
// Styles
import styles from './AdminCurrentView.module.scss';
// Dictioneries
import { ADMIN_DISPLAYS } from '../../controllers/AdminController';

const ProductsAdminView = () => <div />;
const UsersAdminView = ({ addUser }) => {
  const x = 5;
  return (
    <div className={styles.admin_top_row}>
      {ADMIN_DISPLAYS.USERS}
    </div>
  );
};

// ----- Help Function ----- //
const getDisplayComponent = (currentDisplay, addUser) => {
  let displayComponent;
  switch (currentDisplay) {
    case ADMIN_DISPLAYS.PRODUCTS:
      displayComponent = <ProductsAdminView />;
      break;
    case ADMIN_DISPLAYS.USERS:
      displayComponent = <UsersAdminView addUser={addUser} />;
      break;
    default:
      break;
  }
  return displayComponent;
};

const AdminCurrentView = ({
  addUser,
  currentDisplay,
}) => (
  <div className={styles.view_container}>
    {getDisplayComponent(currentDisplay, addUser)}
  </div>
);

export default AdminCurrentView;
