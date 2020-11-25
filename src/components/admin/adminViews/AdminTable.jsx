import React from 'react';
// Components
import CustomTable from '../../common/Table';
import CustomModal from '../CustomModal';
// Common
import { ADMIN_TABLE_FIELDS } from '../../../common/app-const';
// Libs
import { getEnglishFieldType } from '../../../libs/helpers';

// -- TEMP -- //
import PRODUCTS from '../../../common/FAKE_PRODUCTS';
import USERS from '../../../common/FAKE_USERS';
import ORDERS from '../../../common/FAKE_ORDERS';

const AdminTable = (props) => {
  const {
    currentDisplay,
    fetchOrders,
    fetchProducts,
    users,
    products,
    orders,
    isModalOpen,
    toggleModal,

  } = props;
  const englishType = getEnglishFieldType(currentDisplay);
  let testData;
  let fetchDataFunction;
  const currentFields = ADMIN_TABLE_FIELDS[englishType];
  switch (englishType) {
    case 'products':
      testData = PRODUCTS;
      fetchDataFunction = fetchProducts;
      break;
    case 'orders':
      testData = ORDERS;
      fetchDataFunction = fetchOrders;
      break;
    case 'users':
      testData = USERS;
      break;
    default:
      break;
  }
  return (
    <>
      <CustomTable
        isLoading={products.isLoading}
        fetchDataFunction={fetchDataFunction}
        fields={currentFields}
        data={testData}
        {...props}
      />
      <CustomModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        tableType={currentDisplay}
        onApprove={(data) => console.log('DATA WAS SENT TO SERVER')}
      />
    </>
  );
};

export default AdminTable;
