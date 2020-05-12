import React from 'react';

class AdminController extends React.Component {
  componentDidMount() {
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
    return (
      <View
        {...this.props}
        {...this.state}
        {...this.callbacks()}
      />
    );
  }
}

export default AdminController;
