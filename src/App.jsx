import React from 'react';
import styles from './test.module.scss';

function App() {
  return (
    <>
      <div className={styles.test}>
        {'FREE '}
        <div style={{ color: 'green' }}>
          PAL
        </div>
        <div style={{ color: 'red' }}>
          STINE
        </div>
      </div>
    </>
  );
}

export default App;
