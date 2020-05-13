import React from 'react';
// Dictioneries
export const ADMIN_DISPLAYS = {
  PRODUCTS: 'מוצרים',
  USERS: 'משתמשים',
};

class AdminController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDisplay: ADMIN_DISPLAYS.USERS,
    };
  }

  addUser(data) {
    const { addUser } = this.props;
    addUser(data);
  }

  changeView(view) {
    this.setState({ currentDisplay: ADMIN_DISPLAYS[view] });
  }

  callbacks() {
    return {
      addUser: this.addUser.bind(this),
      changeView: this.changeView.bind(this),
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
