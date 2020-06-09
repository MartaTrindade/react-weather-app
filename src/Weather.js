import React from 'react';
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "./Weather.css";

export default function Weather (props) {
  const unitLabel = props.data.unitSystem === "metric" ? 'C' : 'F';

  function showCelsius(event) {
    event.preventDefault();
    props.onChangeUnit("metric");
  }
  function showFarenheit(event) {
    event.preventDefault();
    props.onChangeUnit("imperial");
  }

  return (
    <div className="weather">
      <h2>
        <ul>
          <li>{props.data.city}</li>
          <FormattedDate date={props.data.date} />
        </ul>
      </h2>
      <div className="currentWeather">
        <div className="row">
          <div className="col-6">
            <ul className="currentMaxMin">
              <li><WeatherIcon code={props.data.icon} /></li>
              <li>{props.data.maxTemperature}°/{props.data.minTemperature}°{unitLabel}</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <span className="temperature">{props.data.temperature}°{unitLabel}</span>
                <button type="submit" className="btn-units" onClick={showCelsius}>°C</button>|
                <button type="submit" className="btn-units" onClick={showFarenheit}> °F</button>
              </li>
              <li className="weatherDescription">{props.data.description}</li>
              <li className="weatherDetails">Humidity: {props.data.humidity}%</li>
              <li className="weatherDetails">Wind: {props.data.wind} {props.data.unitSystem === "metric" ? "Km/h" : "mph"}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}