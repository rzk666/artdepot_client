import React, { useEffect } from 'react';
// common
import ROUTES from '../universal/routes';
// Redux Action

// ----- Dictioneries ----- //
const { ADMIN_ROUTE, HOME_ROUTE } = ROUTES;

// ----- Help Functions ----- //
const handleAuthChange = (controllerProps) => {
  const { auth, history } = controllerProps;
  const { isLoggedIn } = auth;
  const { user } = auth;
  if (isLoggedIn) {
    const { cookies } = controllerProps;
    cookies.set('auth', auth, { path: '/' });
    if (user.role === 'admin') {
      history.push(ADMIN_ROUTE);
    } else {
      history.push(HOME_ROUTE);
    }
  }
};

const LoginController = (props) => {
  const {
    auth, cookies, refreshAuth, login,
  } = props;

  // ------ Use Effects ----- //
  useEffect(() => {
    // handle cookies
    const cookie = cookies.get('auth');
    if (cookie && cookie.token) {
      refreshAuth(cookie);
    }
  }, []);

  useEffect(() => {
    const { isLoggedIn } = auth;
    // Indicates a successfull login
    if (isLoggedIn) {
      handleAuthChange(props);
    }
  }, [auth.isLoggedIn]);

  const userLogin = (data) => {
    login(data);
  };

  const { View } = props;
  return (
    <View
      {...props}
      login={userLogin}
    />
  );
};

export default LoginController;
