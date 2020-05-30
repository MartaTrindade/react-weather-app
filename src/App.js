import React from 'react';
import logo from './logo.svg';
import Location from "./Location";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <div className="container">
        <Location defaultCity="Porto"/>
        <br/>
        <footer>
          <small>Coded by <a href="https://www.linkedin.com/in/marta-trindade-ap/" target="_blank">Marta Trindade</a> {" "}
            and is <a href="https://github.com/MartaTrindade/react-weather-app" target="_blank">open-sourced on GitHub</a> {" "}
            and hosted on <a href="https://www.netlify.com/" target="_blank">Netlify</a>
          </small>
          <small><br />Coded with React <img src={logo} className="App-logo" alt="logo" /></small>  
        </footer>
      </div>
    </div>
  );
}
