import React from 'react';
// Styles
import styles from './FormErrorMessage.module.scss';

const FormErrorMessage = ({ message }) => (
  <div style={message ? {} : { opacity: 0 }} className={styles.error_container}>
    {message}
  </div>
);

export default FormErrorMessage;
