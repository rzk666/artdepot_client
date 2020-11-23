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
  fetchProducts,
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
  orders: state.orders,
  users: state.users,
  products: state.products,
  misc: state.misc,
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (data) => dispatch(addUser(data)),
  fetchUsers: (data) => dispatch(fetchUsers(data)),
  fetchOrders: (type, data) => dispatch(fetchOrders(type, data)),
  fetchProducts: (type, data) => dispatch(fetchProducts(type, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(page((Admin), pages.ADMIN));
