import React from 'react';
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";

import "./Weather.css";

export default function Weather (props) {
  return (
    <div className="weather">
      <h2>
        <ul>
          <li><i className="fas fa-map-marker-alt" />{" "}<span>{props.data.city}</span></li>
          <FormattedDate date={props.data.date} />
        </ul>
      </h2>
      <div className="currentWeather">
        <div className="row">
          <div className="col-6">
            <ul className="currentMaxMin">
              <li><WeatherIcon code={props.data.icon} /></li>
              <li>{props.data.maxTemperature}º/{props.data.minTemperature}ºC</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li><WeatherUnit celsius={props.data.temperature} /></li>
              <li className="weatherDescription">{props.data.description}</li>
              <li className="weatherDetails">Humidity: {props.data.humidity}%</li>
              <li className="weatherDetails">Wind: {props.data.wind} Km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}