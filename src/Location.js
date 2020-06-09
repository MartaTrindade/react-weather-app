import React, { useState, useEffect } from "react";
import axios from 'axios';
import Weather from './Weather';
import Forecast from "./Forecast";

import "./Weather.css";

export default function Location(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  const [unitSystem, setUnitSystem] = useState("metric");

  //Weather API data
  function searchCity (response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt*1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      maxTemperature: Math.round(response.data.main.temp_max),
      minTemperature: Math.round(response.data.main.temp_min),
      unitSystem: unitSystem
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unitSystem}`;
    axios.get(apiUrl).then(searchCity);
  }

  //🌍Geolocation
    function searchLocation(position) {
      let apiKey = "2e83a4b7ba2b243a8588825e9765fe5a";
      let lat = (position.coords.latitude);
      let lon = (position.coords.longitude);
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unitSystem}`;
      axios.get(apiUrl).then(searchCity);
    }
    function getCurrentLocation(event) {
      event.preventDefault();
      navigator.geolocation.getCurrentPosition(searchLocation);
    }

    //Unit conversion
    useEffect(() => {search();}, [unitSystem]);
    
    function changeUnit(unit) {
      setUnitSystem(unit);
    }


  if (weatherData.ready) {
    return (
    <div className="location">
      <form className="searchform" onSubmit={handleSubmit}>
          <input type="form" className="location" placeholder="Location" autoComplete="off" autoFocus="on" onChange={handleCityChange} />
          <button type="submit" className="btn-dark">Search</button>
          <button type="Current Location" className="btn-light" onClick={getCurrentLocation}>Current Location</button>
      </form>
      <br />
      <Weather data={weatherData} onChangeUnit={changeUnit} />
      <Forecast city={weatherData.city} />
    </div>
    );
  } else {
    search();
    return (
      <div><strong>Loading...</strong></div>
    )
  }
}