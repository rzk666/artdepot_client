import React, { useEffect, useState } from 'react';
// Dictioneries
export const ADMIN_DISPLAYS = {
  MAIN: 'עמוד ראשי',
  PRODUCTS: 'מוצרים',
  USERS: 'משתמשים',
  ORDERS: 'הזמנות',
};

const AdminController = (props) => {
  const {
    products,
    orders,
    users,
    addUser,
    fetchUsers,
    // View Component
    View,
  } = props;

  // ----- State ----- //
  const [currentDisplay, setCurrentDisplay] = useState(ADMIN_DISPLAYS.PRODUCTS);

  // ----- Callbacks ----- //
  const handleDisplayChange = () => {
    // INTEGRATION //
    // if (currentDisplay === ADMIN_DISPLAYS.PRODUCTS && !products.data.length) {
    //   fetchProducts('index', 1);
    // } else if (currentDisplay === ADMIN_DISPLAYS.ORDERS && !orders.data.length) {
    //   fetchOrders('index', 1);
    // }
  };

  // ----- Use Effects ----- //

  // Mounting
  useEffect(() => {
    // INTEGRATION //
    // fetchUsers();
  }, []);

  // Handle display change
  useEffect(() => {
    handleDisplayChange();
  }, [currentDisplay]);

  const addNewUser = (data) => {
    addUser(data);
  };

  const changeView = (view) => {
    setCurrentDisplay(ADMIN_DISPLAYS[view]);
  };

  return (
    <View
      {...props}
      currentDisplay={currentDisplay}
      changeView={changeView}
      addUser={addNewUser}
    />
  );
};

export default AdminController;
