import React, { useState } from 'react';
// Componenets
import { Modal, Button, Input } from 'semantic-ui-react';
import { useFormik, Form, Field } from 'formik';
// Styles
import styles from './CustomModal.module.scss';

// ----- Help Componenets ----- //
const AddUserForm = ({ addNewUser }) => {
  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      company: '',
      email: '',
      deliveryAddresses: [],
    },
    onSubmit: (values) => addNewUser(values),
  });
  const x = 5;
  return (
    <div className={styles.user_modal_container}>
      <Form>
        <Field type="id" name={'ח"פ'} />
        <Field type="name" name="שם מלא" />
        <Field type="company" name={'ח"פ'} />
        <Field type="email" name={'ח"פ'} />
        <Field type="deliveryAddresses" name={'ח"פ'} />
      </Form>
    </div>
  );
};

const CustomModal = ({
  isModalOpen, toggleModal, tableType, onApprove,
}) => {
  const x = 5;
  return (
    <Modal open={isModalOpen} className={styles.modal}>
      <div className={styles.custom_modal_container}>
        { tableType === 'משתמשים' && <AddUserForm addNewUser={() => console.log('added')} />}
        <div className={styles.btn_container}>
          <Button
            onClick={() => toggleModal(false)}
            className={styles.btn}
          >
            יציאה
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
