import React from 'react';
// Dictioneries
export const ADMIN_DISPLAYS = {
  MAIN: 'עמוד ראשי',
  PRODUCTS: 'מוצרים',
  USERS: 'משתמשים',
  ORDERS: 'הזמנות',
};

class AdminController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDisplay: ADMIN_DISPLAYS.ORDERS,
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
