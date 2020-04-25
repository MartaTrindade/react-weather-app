import React from 'react';
import logo from './logo.svg';
import Wheather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Weather App
        </p>
      </header>
      <div className="currentWeather">
        <Wheather city="Porto"/>
      </div>
      <h3>HOURLY TEMPERATURE</h3>
      <div class="forecast">
        <div class="row weatherForecast" id="hourly-forecast"></div>
      </div>
      <br />
      <h3>DAILY TEMPERATURE</h3>
      <div class="forecast">
        <div class="row weatherForecast" id="daily-forecast"></div>
      </div>
      <footer>
        <img src={logo} className="App-logo" alt="logo" />
        <small>Coded by <a href="https://www.linkedin.com/in/marta-trindade-ap/" className="refLindedin" target="_blank">Marta Trindade</a> {" "}
          and is <a href="https://github.com/MartaTrindade/react-weather-app" className="refGithub" target="_blank">open-sourced on GitHub</a> {" "}
          and hosted on <a href="https://www.netlify.com/" className="refHost" target="_blank">Netlify</a>
        </small>
      </footer>
    </div>
  );
}

export default App;
