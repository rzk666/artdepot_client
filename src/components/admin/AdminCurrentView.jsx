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
const getDisplayComponent = (props) => {
  let displayComponent;
  const { currentDisplay } = props;
  switch (currentDisplay) {
    case ADMIN_DISPLAYS.PRODUCTS:
      displayComponent = <ProductsAdminView {...props} />;
      break;
    case ADMIN_DISPLAYS.USERS:
      displayComponent = <UsersAdminView {...props} />;
      break;
    case ADMIN_DISPLAYS.MAIN:
      displayComponent = (
        <MainAdminView
          {...props}
        />
      );
      break;
    case ADMIN_DISPLAYS.ORDERS:
      displayComponent = <OrdersAdminView {...props} />;
      break;
    default:
      break;
  }
  return displayComponent;
};

const AdminCurrentView = (props) => (
  <div className={styles.view_container}>
    {getDisplayComponent(props)}
  </div>
);

export default AdminCurrentView;
