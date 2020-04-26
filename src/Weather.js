import React from 'react';
import axios from 'axios';
import locationData from "./Location";

import "./Weather.css";

export default function Weather (props) {
  function searchCity (response) {
    console.log(`The weather in ${response.data.name} is ${response.data.main.temp}ºC`);
  }

  let weatherData = {
    temperature: 20,
    description: "Clear sky",
    imgUrl: "https://openweathermap.org/img/wn/03d@2x.png",
    humidity: 80,
    wind: 5,
    maxTemperature: 20,
    minTemperature: 10
  };

  let apiKey = "2e83a4b7ba2b243a8588825e9765fe5a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(searchCity);

  return (
    <div className="weather">
      <div className="currentWeather">
        <div className="row">
          <div className="col-6">
            <ul>
              <li><img src={weatherData.imgUrl} alt={weatherData.description} /></li>
              <li><span className="currentMaxMin">{weatherData.maxTemperature}ºC/{weatherData.minTemperature}ºC</span></li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li className="temperature">{weatherData.temperature} <span className="units"><a href="/" className="active"> ºC</a> | <a href="/"> ºF</a></span>
              </li>
              <li className="weatherDescription">{weatherData.description}</li>
              <li className="weatherDetails">Humidity: {weatherData.humidity}%</li>
              <li className="weatherDetails">Wind: {weatherData.wind} Km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <br/>
      The currente weather in {locationData.city} is {weatherData.temperature} ºC
    </div>
  )
}