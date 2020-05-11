import { combineReducers } from 'redux';
import products from './models/products/productsReducer';
import auth from './models/auth/authReducer';

export default combineReducers({
  products,
  auth,
});
