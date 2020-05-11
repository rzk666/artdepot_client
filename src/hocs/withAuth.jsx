import React from 'react';
import { connect } from 'react-redux';
// Redux Actions
import {
  login,
} from '../redux/models/auth/authActions';

export default (ComposedComponent) => {
  class WithAuth extends React.Component {
    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
      return (
        <React.Fragment>
          <ComposedComponent {...this.props} />
        </React.Fragment>
      );
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth,
  });

  const mapDispatchToProps = dispatch => ({
    login              : data => dispatch(login(data)),
  });

  return connect(mapStateToProps, mapDispatchToProps)((WithAuth));
};
