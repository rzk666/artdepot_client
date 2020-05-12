import React from 'react';
// Utils
import { connect } from 'react-redux';
// Redux Actions
import {
  login,
} from '../redux/models/auth/authActions';

// ----- Help Functions ----- //
const enforceAuth = (controllerProps) => {
  const { auth, history, location } = controllerProps;
  const { isLoggedIn } = auth;
  const { pathname } = location;
  // Handle logout
  if (!isLoggedIn) {
    history.push('/login');
    return;
  }
  const role = (auth.user && auth.user.role);
  if (role !== 'admin') {
    pathname.includes('admin');
    history.push('/');
  }
};

export default (ComposedComponent) => {
  class WithAuth extends React.Component {
    componentDidMount() {
      // TODO: Add auth from cookie
      enforceAuth(this.props);
    }

    componentDidUpdate(prevProps) {
      const { auth } = this.props;
      const { isLoggedIn } = auth;
      if (isLoggedIn !== prevProps.auth.isLoggedIn) {
        enforceAuth(this.props);
      }
    }

    render() {
      return (
        <>
          <ComposedComponent {...this.props} />
        </>
      );
    }
  }

  const mapStateToProps = (state) => ({
    auth: state.auth,
  });

  const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(login(data)),
  });

  return connect(mapStateToProps, mapDispatchToProps)((WithAuth));
};
