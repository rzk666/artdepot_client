import { combineReducers } from 'redux';
import products from './models/products/productsReducer';
import auth from './models/auth/authReducer';
import admin from './models/admin/adminReducer';
import misc from './models/misc/miscReducer';
import orders from './models/orders/ordersReducer';
import users from './models/users/usersReducer';

export default combineReducers({
  misc,
  admin,
  products,
  auth,
  orders,
  users,
});
