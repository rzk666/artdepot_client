/* eslint-disable react/no-unused-state */
import React from 'react';
// Utils
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class WithMisc extends React.Component {
    componentDidMount() {
      this.setState({ misc: { screenWidth: window.innerWidth, screenHeight: window.innerHeight } });
    }

    render() {
      console.log(this.state);
      return (
        <>
          <ComposedComponent {...this.props} />
        </>
      );
    }
  }

  const mapStateToProps = (state) => {
    console.log(state);
    return {
      misc: state.misc,
    };
  };

  const mapDispatchToProps = (dispatch) => ({
  });

  return connect(mapStateToProps, mapDispatchToProps)((WithMisc));
};
