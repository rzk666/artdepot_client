import React from 'react';
// Componenets
import { Modal } from 'semantic-ui-react';
import UserForm from './adminForms/UserForm';
// Images
import Cancel from '../../static/images/icons/cancel.png';
// Libs
import classnames from 'classnames';
// Styles
import styles from './CustomModal.module.scss';

const CustomModal = ({
  isModalOpen,
  toggleModal,
  tableType,
  onApprove,
  addNotification,
}) => (
  <Modal open={isModalOpen} className={styles.modal}>
    <img
      src={Cancel}
      className={classnames(styles.cancel, 'hover_animation')}
      onClick={() => toggleModal(false)}
      alt="סגור חלון"
    />
    <div className={styles.custom_modal_container}>
      { tableType === 'משתמשים' && <UserForm addNotification={addNotification} onSubmit={(values) => onApprove((values))} />}
    </div>
  </Modal>
);

export default CustomModal;
