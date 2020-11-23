/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
// Custom Hooks
import usePrevious from '../hooks/usePrevious';
// Components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classnames from 'classnames';
import Loader from '../components/common/Notifications/Loader';
// Styles
import styles from './Login.module.scss';
import FORMS from '../common/form-fields';

// ----- Dictioneries ----- //
const { LOGIN_FIELDS } = FORMS;

// Help Components
const LoginComponent = (props) => {
  const { hasError, login, isLoading } = props;

  // ----- State ----- //
  const [state, setState] = useState({
    formFieldsRefs: [],
    showErrors: false,
  });

  // ----- Previous ----- //
  const previousAuthError = usePrevious(hasError);

  // ----- Callbacks ----- //
  const _handleFailedLogin = (prevAuthError) => {
    if (!prevAuthError && hasError) {
      setState({ ...state, showErrors: true });
    }
  };

  const handleFieldChange = () => {
    setState({ ...state, showErrors: false });
  };

  const handleLogin = () => {
    const { formFieldsRefs } = state;
    const customerId = formFieldsRefs[0].current.value;
    const password = formFieldsRefs[1].current.value;
    if (!customerId || !password) {
      setState({ ...state, showErrors: true });
    } else {
      login({ customerId, password });
    }
  };

  // ----- Use Effects ----- //
  useEffect(() => {
    // Fields indexes
    // 0 -> userField
    // 1 -> passwordField
    const refs = [];
    for (let i = 0; i < Object.keys(LOGIN_FIELDS).length; i += 1) {
      refs[i] = React.createRef();
    }
    setState({ ...state, formFieldRefs: refs });
  }, []);

  useEffect(() => {
    _handleFailedLogin(previousAuthError);
  });

  const { formFieldsRefs, showErrors } = state;
  const fields = Object.keys(LOGIN_FIELDS).map((key, i) => (
    <Form.Group
      className={styles.form_group}
      key={`${key}_${i}`}
    >
      <Form.Label
        key={`loginlabel_${i}`}
      >
        {LOGIN_FIELDS[key].placeholder}
      </Form.Label>
      <Form.Control
        onChange={() => handleFieldChange()}
        ref={formFieldsRefs[i]}
        type={LOGIN_FIELDS[key].type}
        placholder={LOGIN_FIELDS[key].placeholder}
      />
    </Form.Group>
  ));

  return (
    <>
      <Form>
        {fields}
        <div className={classnames(styles.login_btn, { [styles.fade]: showErrors })}>
          <Button
            onClick={() => handleLogin()}
            variant="primary"
          >
            התחבר
          </Button>
        </div>
      </Form>
      { isLoading
        && <Loader style={{ marginTop: '10px' }} />}
      { showErrors
          && <div className={styles.errors_container}>הוזנו פרטים שגויים</div>}
    </>
  );
};

const LoginView = ({
  login,
  auth,
}) => {
  const { isLoading, hasError } = auth;
  return (
    <div className={styles.wrapper}>
      <div className={styles.login_container}>
        <LoginComponent
          hasError={hasError}
          isLoading={isLoading}
          login={login}
        />
      </div>
    </div>
  );
};

export default LoginView;
