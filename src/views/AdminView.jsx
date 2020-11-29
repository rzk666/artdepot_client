import React from 'react';
// Components
import AdminNavbar from '../components/admin/AdminNavbar';
import AdminCurrentView from '../components/admin/AdminCurrentView';
// Styles
import styles from './Admin.module.scss';

// Help Components

const AdminView = ({
  signOut,
  currentDisplay,
  changeView,
  fetchProducts,
  fetchOrders,
  fetchUsers,
  products,
  orders,
  users,
  misc,
  toggleModal,
  isModalOpen,
  addNotification,
  currentModalData,
  setModalData,
}) => (
  <div className={styles.wrapper}>
    <AdminNavbar
      signOut={signOut}
      changeView={changeView}
      currentDisplay={currentDisplay}
    />
    <AdminCurrentView
      addNotification={addNotification}
      products={products}
      orders={orders}
      users={users}
      misc={misc}
      fetchProducts={fetchProducts}
      fetchUsers={fetchUsers}
      fetchOrders={fetchOrders}
      changeView={changeView}
      currentDisplay={currentDisplay}
      toggleModal={toggleModal}
      isModalOpen={isModalOpen}
      currentModalData={currentModalData}
      setModalData={setModalData}
    />
  </div>
);

export default AdminView;
