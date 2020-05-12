/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// Utils
import { connect } from 'react-redux';
// Redux Actions
import {
  login,
} from '../redux/models/auth/authActions';
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
  login: (data) => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(page((Admin), pages.ADMIN));
