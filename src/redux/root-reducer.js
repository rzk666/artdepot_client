import { combineReducers } from 'redux';
import products from './models/products/productsReducer';

export default combineReducers({
  products,
});
