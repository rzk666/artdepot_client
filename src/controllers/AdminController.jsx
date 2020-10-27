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
      currentDisplay: ADMIN_DISPLAYS.MAIN,
    };
  }

  componentDidMount() {
    // INTEGRATION //
    // const { fetchUsers } = this.props;
    // fetchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentDisplay } = this.state;
    const hasDisplayChanged = currentDisplay !== prevState.currentDisplay;
    if (hasDisplayChanged && currentDisplay !== ADMIN_DISPLAYS.MAIN) {
      this.handleDisplayChange();
    }
  }

  handleDisplayChange() {
    // INTEGRATION //
    // const { products, orders, users } = this.props;
    // const { currentDisplay } = this.state;
    // if (currentDisplay === ADMIN_DISPLAYS.PRODUCTS && !products.data.length) {
    //   fetchProducts('index', 1);
    // } else if (currentDisplay === ADMIN_DISPLAYS.ORDERS && !orders.data.length) {
    //   fetchOrders('index', 1);
    // }
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
