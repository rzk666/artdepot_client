/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// Utils
import { connect } from 'react-redux';
// Redux Actions
import {
  addUser,
} from '../redux/models/admin/adminActions';
import {
  fetchOrders,
} from '../redux/models/orders/ordersActions';
import {
  fetchProductsByIndex,
  fetchProductsBySearch,
  fetchProductsByCategory,
} from '../redux/models/products/productsActions';
import {
  fetchUsers,
} from '../redux/models/users/usersActions';
// Hocs
import page from '../hocs/page';
// Controller & View
import AdminController from '../controllers/AdminController';
import AdminView from '../views/AdminView';
// Dictioneries
import pages from '../universal/pages';

const Admin = (props) => <AdminController {...props} View={AdminView} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (data) => dispatch(addUser(data)),
  fetchUsers: (data) => dispatch(fetchUsers(data)),
  fetchOrders: (data) => dispatch(fetchOrders(data)),
  fetchProductsByIndex: (index) => dispatch(fetchProductsByIndex(index)),
  fetchProductsBySearch: (index) => dispatch(fetchProductsBySearch(index)),
  fetchProductsByCategory: (index) => dispatch(fetchProductsByCategory(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(page((Admin), pages.ADMIN));
