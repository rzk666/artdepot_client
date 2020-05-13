import React from 'react';
// Components
import Spinner from 'react-bootstrap/Spinner';

// Help Components
const Loader = () => (
  <Spinner
    animation="border"
    variant="primary"
    style={{ position: 'absolute', top: '50%', right: '50%' }}
  />
);


export default Loader;
