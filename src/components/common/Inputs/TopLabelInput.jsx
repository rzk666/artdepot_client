/* eslint-disable no-new */
import React from 'react';
// Components
import { Input } from 'semantic-ui-react';
// Styles
import styles from './TopLabelInput.module.scss';

const TopLabelInput = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
}) => {
  const x = 5;
  return (
    <div className={styles.container}>
      <label>
        {label}
        :
      </label>
      <Input
        placeholder={`הזן ${label}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TopLabelInput;
