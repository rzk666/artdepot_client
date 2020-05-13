import React from 'react';

class AdminController extends React.Component {
  componentDidMount() {
  }

  componentDidUpdate() {
  }

  addUser(data) {
    const { addUser } = this.props;
    addUser(data);
  }

  callbacks() {
    return {
      addUser: this.addUser.bind(this),
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
