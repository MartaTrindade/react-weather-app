import React, { useState } from "react";
import axios from 'axios';
import Weather from './Weather';

import "./App.css";
import "./Weather.css";

export default function Location(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  // Weather API data
  function searchCity (response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt*1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      iconUrl: "https://openweathermap.org/img/wn/03d@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      maxTemperature: Math.round(response.data.main.temp_max),
      minTemperature: Math.round(response.data.main.temp_min)
    });
  }

  //Search city
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "2e83a4b7ba2b243a8588825e9765fe5a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(searchCity);
  }

  //Current location
  if (weatherData.ready) {
    return (
    <div className="location">
      <form className="searchform" onSubmit={handleSubmit}>
          <input type="form" className="location" placeholder="Location" autoComplete="off" autoFocus="on" onChange={handleCityChange} />
          <button type="submit" className="btn-dark">Search</button>
          <button type="Current Location" className="btn-light">Current Location</button>
      </form>
      <br />
      <Weather data={weatherData} />
    </div>
    );
  } else {
    search();
    return (
      <div><strong>Loading...</strong></div>
    )
  }
}