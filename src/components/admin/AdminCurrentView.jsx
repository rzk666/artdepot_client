import React from 'react';
// Components
import MainAdminView from './adminViews/MainAdminView';
import AdminTable from './adminViews/AdminTable';

// Styles
import styles from './AdminCurrentView.module.scss';
// Dictioneries
import { ADMIN_DISPLAYS } from '../../controllers/AdminController';

// ----- Help Function ----- //
const getDisplayComponent = (props) => {
  let displayComponent;
  const { currentDisplay } = props;
  switch (currentDisplay) {
    case ADMIN_DISPLAYS.MAIN:
      displayComponent = (
        <MainAdminView
          {...props}
        />
      );
      break;
    default:
    case ADMIN_DISPLAYS.PRODUCTS:
      displayComponent = <AdminTable type={currentDisplay} />;
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
