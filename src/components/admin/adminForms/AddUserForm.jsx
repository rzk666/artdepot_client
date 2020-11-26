import React from 'react';
// Components
import { Input, Button } from 'semantic-ui-react';
import TopLabelInput from '../../common/Inputs/TopLabelInput';
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
      <h2> הוספת משתמש חדש</h2>
      <div className={styles.top_inputs}>
        <Input
          className={styles.styled_input}
          name="id"
          value={formik.values.id}
          label={'ח"פ'}
          placeholder='הזן מספר לקוח (ח"פ)'
          onChange={formik.handleChange}
        />
        <Input
          className={styles.styled_input}
          name="name"
          value={formik.values.name}
          label="שם מלא"
          placeholder="הזן שם מלא"
          onChange={formik.handleChange}
        />
        <Input
          className={styles.styled_input}
          name="company"
          value={formik.values.company}
          label="שם חברה"
          placeholder="הזן שם חברה"
          onChange={formik.handleChange}
        />
        <Input
          className={styles.styled_input}
          name="email"
          value={formik.values.email}
          label="אימייל"
          placeholder="הזן כתובת אימייל"
          onChange={formik.handleChange}
        />
      </div>
      <h2>כתובת למשלוח</h2>
      <div className={styles.address_inputs}>
        <div className={styles.address_top_row}>
          <TopLabelInput
            name="deliveryAddresses"
            value={formik.values.deliveryAddresses}
            label="עיר"
            onChange={() => console.log('test')}
          />
          <TopLabelInput
            name="deliveryAddresses"
            value={formik.values.deliveryAddresses}
            label="כתובת מלאה"
            onChange={() => console.log('test')}
          />
          <TopLabelInput
            name="deliveryAddresses"
            value={formik.values.deliveryAddresses}
            label="מיקוד"
            onChange={() => console.log('test')}
          />
        </div>
        <TopLabelInput
          name="deliveryAddresses"
          value={formik.values.deliveryAddresses}
          label="הערות לכתובת"
          onChange={() => console.log('test')}
          style={{ marginTop: '20px' }}
          fluid
        />
      </div>
      <Button
        style={{
          marginTop: 'auto',
          color: 'white',
          backgroundColor: 'var(--admin-bg-purple)',
          width: '125px',
          display: 'flex',
          justifyContent: 'center',
          alignItem: 'center',
        }}
        onClick={formik.handleSubmit}
      >
        הוסף משתמש
      </Button>
    </div>
  );
};

export default AddUserForm;
