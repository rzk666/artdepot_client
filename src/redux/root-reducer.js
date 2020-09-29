import { combineReducers } from 'redux';
import products from './models/products/productsReducer';
import auth from './models/auth/authReducer';
import admin from './models/admin/adminReducer';
import misc from './models/misc/miscReducer';

export default combineReducers({
  misc,
  admin,
  products,
  auth,
});
