import React from 'react';
// Components
import Loader from '../components/common/Notifications/Loader';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Styles
import styles from './Login.module.scss';
import { LOGIN_FIELDS } from '../common/form-fields'

// Help Components
const LoginComponent = ({}) => {
    const x = 5;
    const fields = Object.keys(LOGIN_FIELDS).map((key, index) => 
    (<Form.Group
        key={`${key}_${index}`}>
            <Form.Label key={`loginlabel_${index}`}>{LOGIN_FIELDS[key].placeholder}</Form.Label>
            <Form.Control type={LOGIN_FIELDS[key].type} placholder={LOGIN_FIELDS[key].placeholder}/>
        </Form.Group>));
    return (
        <Form>
            {fields}
            <div className={styles.loginBtn}>
                <Button variant="primary" type="submit">
                    {"התחבר"}
                </Button>
            </div>
                
      </Form>
    )
}

const LoginView = ({
  login,
  auth,
}) => {
const { isLoading } = auth;
return (
  <div className={styles.wrapper}>

    <div className={styles.test}>
        { isLoading ? <Loader/> : <LoginComponent/>}
    </div>
  </div>)};

export default LoginView;
