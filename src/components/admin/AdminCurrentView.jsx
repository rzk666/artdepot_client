import React from 'react';
// Components
import ProductsAdminView from './adminViews/ProductsAdminView';
import UsersAdminView from './adminViews/UsersAdminView';
import MainAdminView from './adminViews/MainAdminView';
import OrdersAdminView from './adminViews/OrdersAdminView';

// Styles
import styles from './AdminCurrentView.module.scss';
// Dictioneries
import { ADMIN_DISPLAYS } from '../../controllers/AdminController';

// ----- Help Function ----- //
const getDisplayComponent = (currentDisplay, addUser, changeView) => {
  let displayComponent;
  switch (currentDisplay) {
    case ADMIN_DISPLAYS.PRODUCTS:
      displayComponent = <ProductsAdminView />;
      break;
    case ADMIN_DISPLAYS.USERS:
      displayComponent = <UsersAdminView addUser={addUser} />;
      break;
    case ADMIN_DISPLAYS.MAIN:
      displayComponent = (
        <MainAdminView
          title={currentDisplay}
          changeView={changeView}
        />
      );
      break;
    case ADMIN_DISPLAYS.ORDERS:
      displayComponent = <OrdersAdminView addUser={addUser} />;
      break;
    default:
      break;
  }
  return displayComponent;
};

const AdminCurrentView = ({
  addUser,
  currentDisplay,
  changeView,
}) => (
  <div className={styles.view_container}>
    {getDisplayComponent(currentDisplay, addUser, changeView)}
  </div>
);

export default AdminCurrentView;
