import { combineReducers } from 'redux';
import products from './models/products/productsReducer';
import auth from './models/auth/authReducer';
import admin from './models/admin/adminReducer';

export default combineReducers({
  admin,
  products,
  auth,
});
