/* eslint-disable no-underscore-dangle */
import React from 'react';
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
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    // Fields indexes
    // 0 -> userField
    // 1 -> passwordField
    const refs = [];
    for (let i = 0; i < Object.keys(LOGIN_FIELDS).length; i += 1) {
      refs[i] = React.createRef();
    }
    this.state = {
      formFieldsRefs: refs,
      showErrors: false,
    };
  }


  componentDidUpdate(prevProps) {
    // Handle failed login attempt
    this._handleFailedLogin(prevProps);
  }

  _handleFailedLogin(prevProps) {
    const { hasError } = this.props;
    if (!prevProps.hasError && hasError) {
      this.setState({ showErrors: true });
    }
  }

  handleFieldChange() {
    this.setState({ showErrors: false });
  }

  handleLogin() {
    const { login } = this.props;
    const { formFieldsRefs } = this.state;
    const customerId = formFieldsRefs[0].current.value;
    const password = formFieldsRefs[1].current.value;
    if (!customerId || !password) {
      this.setState({ showErrors: true });
    } else {
      login({ customerId, password });
    }
  }

  render() {
    console.log(this.state.showErrors);
    const { isLoading } = this.props;
    const { formFieldsRefs, showErrors } = this.state;
    const fields = Object.keys(LOGIN_FIELDS).map((key, i) => (
      <Form.Group
        key={`${key}_${i}`}
      >
        <Form.Label
          key={`loginlabel_${i}`}
        >
          {LOGIN_FIELDS[key].placeholder}
        </Form.Label>
        <Form.Control
          onChange={() => this.handleFieldChange()}
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
              onClick={() => this.handleLogin()}
              variant="primary"
            >
              התחבר
            </Button>
          </div>
        </Form>
        { isLoading
        && <Loader />}
        { showErrors
          && <div className={styles.errors_container}>הוזנו פרטים שגויים</div>}
      </>
    );
  }
}

const LoginView = ({
  formFieldsRefs,
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
          formFieldsRefs={formFieldsRefs}
        />
      </div>
    </div>
  );
};

export default LoginView;
