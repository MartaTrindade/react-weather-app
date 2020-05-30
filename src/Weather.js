import React from 'react';
import FormattedDate from "./FormattedDate";
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
            <ul>
              <li><img src={props.data.iconUrl} alt={props.data.description} /></li>
              <li><span className="currentMaxMin">{props.data.maxTemperature}ºC/{props.data.minTemperature}ºC</span></li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li className="temperature">{props.data.temperature} <span className="units"><a href="/" className="active"> ºC</a> | <a href="/"> ºF</a></span>
              </li>
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