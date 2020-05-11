import React from 'react';
import styles from './test.module.scss';
import { browserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '/pages/login';
import './global.scss'

function App() {
  return (
      <Router>
        <Route path="/login" component={Login}/>
      </Router>
  );
}

export default App;
