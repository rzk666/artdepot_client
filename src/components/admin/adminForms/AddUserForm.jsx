import React, { useState } from 'react';
// Components
import { Input, Button } from 'semantic-ui-react';
import TopLabelInput from '../../common/Inputs/TopLabelInput';
import {
  useFormik,
} from 'formik';
// Styles
import styles from './AddUserForm.module.scss';

// ------ Consts & Dicts ------ //
const initialAddresses = {
  city: '',
  address: '',
  zipcode: '',
  notes: '',
};

const AddUserForm = ({ addNewUser }) => {
  const [showErrors, toggleShowErrors] = useState(false);
  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      company: '',
      email: '',
      deliveryAddresses: [initialAddresses],
    },
    validateOnChange: false,
    validate: (values) => {
      const errors = {
        id: '',
        name: '',
        company: '',
        email: '',
        deliveryAddresses: {},
      };
      const {
        id,
        name,
        company,
        email,
        deliveryAddresses,
      } = values;
      if (!id) {
        errors.id = 'Requiered';
      }
      if (!name) {
        errors.name = 'Requiered';
      }
      if (!company) {
        errors.company = 'Requiered';
      }
      if (!email) {
        errors.email = 'Requiered';
      }
      // Addressess
      const { city, address, zipcode } = deliveryAddresses[0];
      if (!city) {
        errors.deliveryAddresses.city = 'Requiered';
      }
      if (!address) {
        errors.deliveryAddresses.address = 'Requiered';
      }
      if (!zipcode) {
        errors.deliveryAddresses.zipcode = 'Requiered';
      }
      return errors;
    },
    onSubmit: (values) => addNewUser(values),

  });
  const x = 5;
  console.log(formik.errors);
  return (
    <div className={styles.user_form_container}>
      <h2> הוספת משתמש חדש</h2>
      <div className={styles.top_inputs}>
        <Input
          className={styles.styled_input}
          type="number"
          action={false}
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
        {/* ASK DAD -> Is it relevant?
        <Button onClick={() => {
          const currentAddress = formik.values.deliveryAddresses[0];
          formik.values.deliveryAddresses.push(currentAddress);
          formik.values.deliveryAddresses[0] = initialAddresses;
          formik.resetForm({
            values: formik.values,
          });
          console.log(formik.values.deliveryAddresses);
          console.log(formik.values);
        }}
        >
          ZLADIM
        </Button> */}
        <div className={styles.address_top_row}>
          <TopLabelInput
            name="deliveryAddresses[0].city"
            value={formik.values.deliveryAddresses[0].city}
            label="עיר"
            onChange={formik.handleChange}
          />
          <TopLabelInput
            name="deliveryAddresses[0].address"
            value={formik.values.deliveryAddresses[0].address}
            label="כתובת מלאה"
            onChange={formik.handleChange}
          />
          <TopLabelInput
            name="deliveryAddresses[0].zipcode"
            value={formik.values.deliveryAddresses[0].zipcode}
            label="מיקוד"
            onChange={formik.handleChange}
          />
        </div>
        <TopLabelInput
          name="deliveryAddresses[0].notes"
          value={formik.values.deliveryAddresses[0].notes}
          label="הערות לכתובת"
          onChange={formik.handleChange}
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
        onClick={() => {
          formik.handleSubmit();
        }}
      >
        הוסף משתמש
      </Button>
    </div>
  );
};

export default AddUserForm;
