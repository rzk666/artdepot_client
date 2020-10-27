import React from 'react';
// Components
import CustomTable from '../../common/Table';
// Styles
import styles from './AdminTable.module.scss';
// Common
import { ADMIN_TABLE_FIELDS } from '../../../common/app-const';
// Libs
import { getEnglishFieldType } from '../../../libs/helpers';

// -- TEMP -- //
import PRODUCTS from '../../../common/FAKE_PRODUCTS';
import USERS from '../../../common/FAKE_USERS';
import ORDERS from '../../../common/FAKE_ORDERS';

const AdminTable = ({ type, data }) => {
  const englishType = getEnglishFieldType(type);
  let testData;
  const currentFields = ADMIN_TABLE_FIELDS[englishType];
  switch (englishType) {
    case 'products':
      testData = PRODUCTS;
      break;
    case 'orders':
      testData = ORDERS;
      break;
    case 'users':
      testData = USERS;
      break;
    default:
      break;
  }
  return (
    <CustomTable fields={currentFields} data={testData} tableType={type} />
  );
};

export default AdminTable;
