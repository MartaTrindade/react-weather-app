import React, { useState } from 'react';
import axios from 'axios';
import locationData from "./Location";

import "./Weather.css";

export default function Weather (props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  
  function searchCity (response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      iconUrl: "https://openweathermap.org/img/wn/03d@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      maxTemperature: Math.round(response.data.main.temp_max),
      minTemperature: Math.round(response.data.main.temp_min)
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="currentWeather">
          <div className="row">
            <div className="col-6">
              <ul>
                <li><img src={weatherData.iconUrl} alt={weatherData.description} /></li>
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
      </div>
    )
  } else {
    const apiKey = "2e83a4b7ba2b243a8588825e9765fe5a";
    let city = "Porto";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(searchCity);
    
    return (
      <div><strong>Loading...</strong></div>
    )
  }
}