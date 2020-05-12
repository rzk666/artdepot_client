import React from 'react';

class LoginController extends React.Component {

  componentDidMount() {
      const { auth } = this.props;
      const { isLoggedIn } = auth;
      console.log(isLoggedIn);
      if (isLoggedIn) {
        if (auth.user.role === 'admin'){
          this.props.history.push('/admin');
        } else {
          this.props.history.push('/');
        }
      }
  }
  componentDidUpdate() {
  }

  login(data) {
      const { login } = this.props;
      login(data);
  }

  callbacks() {
    return {
      login: this.login.bind(this),
    };
  }

  render() {
    const { View } = this.props;
    return (<View
      {...this.props}
      {...this.state}
      {...this.callbacks()}
    />);
  }
}

export default LoginController;
