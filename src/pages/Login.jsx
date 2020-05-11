import React from 'react';
// Utils
// Redux Actions
import {
  checklistFetchData,
} from '../../redux/models/checklist/checklistActions';
// Hocs
import page from '../../hocs/page';
import configureStore from '../../redux/store/configure-store';
// Controller & View
import Login from '../../controllers/LoginController';
import LoginView from '../../views/LoginView';
// Dictioneries
import { LOGIN } from '../../universal/pages';


const Login = props =>
  <Login {...props} View={LoginView} />;

const mapStateToProps = state => ({
  auth     : state.auth,
});

const mapDispatchToProps = dispatch => ({
  login   : data => dispatch(login(data)),
});

export default store(configureStore, mapStateToProps, mapDispatchToProps)(page(translate(['common'])(Checklist), CHECKLIST));
