import React from 'react';
import logo from './logo.svg';
import Location from "./Location";
import Weather from "./Weather";
import Forecast from "./Forecast";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <div className="container">
        <Location />
        <Weather />
        <Forecast />
        <footer>
          <img src={logo} className="App-logo" alt="logo" />
          <small>Coded by <a href="https://www.linkedin.com/in/marta-trindade-ap/" className="refLindedin" target="_blank">Marta Trindade</a> {" "}
            and is <a href="https://github.com/MartaTrindade/react-weather-app" className="refGithub" target="_blank">open-sourced on GitHub</a> {" "}
            and hosted on <a href="https://www.netlify.com/" className="refHost" target="_blank">Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
