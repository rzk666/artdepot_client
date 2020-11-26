import React from 'react';
// Components
import { Input, Button } from 'semantic-ui-react';
import {
  useFormik,
} from 'formik';
// Styles
import styles from './AddUserForm.module.scss';

const AddUserForm = ({ addNewUser }) => {
  const formik = useFormik({
    initialValues: {
      id: '14124',
      name: '',
      company: '',
      email: '',
      deliveryAddresses: [],
    },
    onSubmit: (values) => addNewUser(values),
  });
  const x = 5;
  return (
    <div className={styles.user_form_container}>
      <Input
        name="id"
        value={formik.values.id}
        label={'ח"פ'}
        onChange={formik.handleChange}
      />
      <Input
        name="name"
        value={formik.values.name}
        label="שם מלא"
        onChange={formik.handleChange}
      />
      <Input
        name="company"
        value={formik.values.company}
        label="שם חברה"
        onChange={formik.handleChange}
      />
      <Input
        name="email"
        value={formik.values.email}
        label="אימייל"
        onChange={formik.handleChange}
      />
      <Input
        name="deliveryAddresses"
        value={formik.values.deliveryAddresses}
        label="כתובות למשלוח"
        onChange={formik.handleChange}
      />
      <Button
        onClick={formik.handleSubmit}
      >
        הוסף
      </Button>
    </div>
  );
};

export default AddUserForm;
