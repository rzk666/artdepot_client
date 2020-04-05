import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{
          position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '500px', height: '500px', top: '500px',
        }}
        >
          <div style={{ color: 'red', fontSize: '25px' }}>
            FREE
          </div>
          <div style={{ color: 'black', fontSize: '25px' }}>
            PAL
          </div>
          <div style={{ color: 'green', fontSize: '25px' }}>
            STINE
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
