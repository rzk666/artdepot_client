import React, { useEffect, useState } from 'react';
// Components
import { Input, Button } from 'semantic-ui-react';
import TopLabelInput from '../../common/Inputs/TopLabelInput';
import {
  useFormik,
} from 'formik';
// HOCs
import WithFormState from '../../../hocs/Forms/withFormState';
// Libs
import { NEW_USER_VALIDATOR, cleanValidationSchema } from '../../../common/validator';
// Styles
import styles from './UserForm.module.scss';

const initialAddresses = {
  city: '',
  address: '',
  zipcode: '',
  notes: '',
};

const initialValues = {
  id: '',
  name: '',
  company: '',
  email: '',
  delivery_addresses: [initialAddresses],
};

const initialTouched = {
  id: '',
  name: '',
  company: '',
  email: '',
  delivery_addresses: [{
    city: '',
    address: '',
    zipcode: '',
  }],
};

const UserForm = ({
  setError,
  onSubmit,
  addNotification,
  currentModalData,
  isEditMode,
  setEditMode,
  toggleModal,
}) => {
  const formik = useFormik({
    initialValues: currentModalData || initialValues,
    initialTouched,
    validate: (values) => {
      const errors = {
        id: NEW_USER_VALIDATOR.validateId(values.id),
        name: NEW_USER_VALIDATOR.validateName(values.name),
        company: NEW_USER_VALIDATOR.validateCompany(values.company),
        email: NEW_USER_VALIDATOR.validateEmail(values.email),
        delivery_addresses: NEW_USER_VALIDATOR.validateDeliveryAddresses(values.delivery_addresses),
      };
      const cleanedErrors = cleanValidationSchema(errors);
      return cleanedErrors;
    },
    onSubmit: async (values, formikProps) => {
      const { resetForm } = formikProps;
      if (isEditMode === false) {
        try {
          await onSubmit(values);
          addNotification({ type: 'success', message: 'משתמש נוסף בהצלחה' });
          resetForm(initialValues);
        } catch (e) {
          setError(e);
          addNotification({ type: 'error', message: 'תקלה בשרת, נסו שוב או צרו קשר עם רזי' });
        }
      } else {
        try {
          await onSubmit(values);
          addNotification({ type: 'success', message: 'משתמש נערך בהצלחה' });
          resetForm(initialValues);
          toggleModal(false);
        } catch (e) {
          setError(e);
          addNotification({ type: 'error', message: 'תקלה בשרת, נסו שוב או צרו קשר עם רזי' });
        }
      }
    },
  });
  return (
    <div className={styles.user_form_container}>
      <h2>הוספת משתמש חדש</h2>
      <div className={styles.top_inputs}>
        <Input
          onBlur={formik.handleBlur}
          error={formik.errors.id && formik.touched.id}
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
          onBlur={formik.handleBlur}
          error={formik.errors.name && formik.touched.name}
          className={styles.styled_input}
          name="name"
          value={formik.values.name}
          label="שם מלא"
          placeholder="הזן שם מלא"
          onChange={formik.handleChange}
        />
        <Input
          onBlur={formik.handleBlur}
          error={formik.errors.company && formik.touched.company}
          className={styles.styled_input}
          name="company"
          value={formik.values.company}
          label="שם חברה"
          placeholder="הזן שם חברה"
          onChange={formik.handleChange}
        />
        <Input
          onBlur={formik.handleBlur}
          error={formik.errors.email && formik.touched.email}
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
          const currentAddress = formik.values.delivery_addresses[0];
          formik.values.delivery_addresses.push(currentAddress);
          formik.values.delivery_addresses[0] = initialAddresses;
          formik.resetForm({
            values: formik.values,
          });
          console.log(formik.values.delivery_addresses);
          console.log(formik.values);
        }}
        >
          ZLADIM
        </Button> */}
        <div className={styles.address_top_row}>
          <TopLabelInput
            onBlur={formik.handleBlur}
            error={formik.errors.delivery_addresses && formik.errors.delivery_addresses[0].city && formik.touched.delivery_addresses[0].city}
            name="delivery_addresses[0].city"
            value={formik.values.delivery_addresses[0].city}
            label="עיר"
            onChange={formik.handleChange}
          />
          <TopLabelInput
            onBlur={formik.handleBlur}
            error={formik.errors.delivery_addresses && formik.errors.delivery_addresses[0].address && formik.touched.delivery_addresses[0].address}
            name="delivery_addresses[0].address"
            value={formik.values.delivery_addresses[0].address}
            label="כתובת מלאה"
            onChange={formik.handleChange}
          />
          <TopLabelInput
            type="number"
            onBlur={formik.handleBlur}
            error={formik.errors.delivery_addresses && formik.errors.delivery_addresses[0].zipcode && formik.touched.delivery_addresses[0].zipcode}
            name="delivery_addresses[0].zipcode"
            value={formik.values.delivery_addresses[0].zipcode}
            label="מיקוד"
            onChange={formik.handleChange}
          />
        </div>
        <TopLabelInput
          name="delivery_addresses[0].notes"
          value={formik.values.delivery_addresses[0].notes}
          label="הערות לכתובת"
          onChange={formik.handleChange}
          style={{ marginTop: '20px' }}
          fluid
        />
      </div>
      <Button
        loading={formik.isSubmitting}
        disabled={formik.isSubmitting}
        style={{
          marginTop: 'auto',
          color: 'white',
          backgroundColor: 'var(--admin-bg-purple)',
          width: '125px',
          display: 'flex',
          justifyContent: 'center',
          alignItem: 'center',
        }}
        type="submit"
        onClick={formik.handleSubmit}
      >
        {isEditMode ? 'עדכן פרטים' : 'הוסף משתמש'}
      </Button>
    </div>
  );
};

export default WithFormState(UserForm);
