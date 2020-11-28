import React, { useState, useEffect } from 'react';

const WithFormStateHOC = (Component) => {
  const WithFormState = (props) => {
    const [submittionError, setError] = useState('');
    useEffect(() => {
      if (submittionError) {
        setTimeout(() => {
          setError('');
        }, 3000);
      }
    },
    [submittionError]);
    return (
      <Component
        error={submittionError}
        setError={setError}
        {...props}
      />
    );
  };
  return WithFormState;
};

export default WithFormStateHOC;
