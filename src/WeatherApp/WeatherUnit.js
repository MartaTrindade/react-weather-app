import React, { useState } from 'react';
import "./Weather.css";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)} </span>
        <button type="submit" className="btn-units">°C</button>|
        <button type="submit" className="btn-units"><a href="/" onClick={showFahrenheit}> °F</a></button>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())} </span>
        <button type="submit" className="btn-units"><a href="/" onClick={showCelsius}>°C</a></button>|
        <button type="submit" className="btn-units"> °F</button>
      </div>
    );
  }
}