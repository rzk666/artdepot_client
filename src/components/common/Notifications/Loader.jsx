import React from 'react';
// Components
import Spinner from 'react-bootstrap/Spinner';

// Help Components
const Loader = ({ style }) => (
  <div style={style || {}}>
    <Spinner
      animation="border"
      variant="primary"
    />
  </div>
);


export default Loader;
