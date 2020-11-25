import React from 'react';
// Componenets
import { Modal, Button, Input } from 'semantic-ui-react';
// Styles
import styles from './CustomModal.module.scss';

// ----- Help Componenets ----- //
const AddUserContent = () => (
  <div className={styles.user_modal_container}>
    <Input />
  </div>
);

const CustomModal = ({ isModalOpen, toggleModal, tableType }) => {
  const x = 5;
  return (
    <Modal open={isModalOpen} className={styles.modal}>
      <div className={styles.custom_modal_container}>
        <AddUserContent />
        <div className={styles.btn_container}>
          <Button
            onClick={() => toggleModal(false)}
            className={styles.btn}
          >
            יציאה
          </Button>
          <Button
            onClick={() => toggleModal(false)}
            className={styles.btn}
          >
            הוספה
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
