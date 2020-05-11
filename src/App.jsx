import React from 'react';
import styles from './test.module.scss';
import './global.scss'

function App() {
  return (
      <div style={{width: '100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div style={{fontSize:"25px", color:"red"}}>
          {"משפט בדיקה"}
        </div>
      </div>
  );
}

export default App;
