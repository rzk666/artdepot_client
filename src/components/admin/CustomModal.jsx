import React from 'react';
// Componenets
import { Modal } from 'semantic-ui-react';
import AddUserForm from './adminForms/AddUserForm';
// Images
import Cancel from '../../static/images/icons/cancel.png';
// Styles
import styles from './CustomModal.module.scss';

const CustomModal = ({
  isModalOpen, toggleModal, tableType, onApprove,
}) => {
  const x = 5;
  return (
    <Modal open={isModalOpen} className={styles.modal}>
      <img
        src={Cancel}
        className={styles.cancel}
        onClick={() => toggleModal(false)}
        alt="סגור חלון"
      />
      <div className={styles.custom_modal_container}>
        { tableType === 'משתמשים' && <AddUserForm addNewUser={(values) => console.log((values))} />}
      </div>
    </Modal>
  );
};

export default CustomModal;
