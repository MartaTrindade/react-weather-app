import React from 'react';
import logo from './logo.svg';
import Wheather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello
        </p>
        <Wheather city="Porto"/>
      </header>
    </div>
  );
}

export default App;
