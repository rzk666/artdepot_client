import React from 'react';
import styles from './test.module.scss';
import Test from './test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test />
        <div className={styles.test}>
          ALLAH
        </div>
      </header>
    </div>
  );
}

export default App;
