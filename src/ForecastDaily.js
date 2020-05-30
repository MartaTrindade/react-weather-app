import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  //⌛Hourly Forecast
  function dispalyHourlyForecast() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    
    for (let index = 0; index < 6; index++) {
      return (
        <div class="col-2">
        <li class="weatherForecast">${formatLastUpdated(forecast.dt * 1000)}</li>
        <li><WeatherIcon code={props.data.weather[0].icon} /></li>
        <li class="weatherForecast">${Math.round(forecast.main.temp_max)}º/${Math.round(forecast.main.temp_min)}ºC</li>
      </div>
      );
    }
  }

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="forecastAPI">
        <h3>Hourly temperature</h3>
        <div className="forecast">
          <div className="row weatherForecast" />{dispalyHourlyForecast()}</div>
        <br/>
        <h3>Daily temperature</h3>
        <div className="forecast">
          <div className="row weatherForecast" />{formatDailyForecast()}</div>
      </div>
    );
  } else {
    const apiKey = "2e83a4b7ba2b243a8588825e9765fe5a";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}

////📆Daily Forecast
//function formatDailyForecast(timestamp) {
//  let forecastDay = new Date(timestamp);
//  let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  let weekDay = weekDays[forecastDay.getDay()];
//  return `${weekDay}`;
//}
//
//function displayDailyForecast(response) {
//  let forecastElement = document.querySelector("#daily-forecast");
//  forecastElement.innerHTML = null;
//  let forecast = null;
//
//  for (let index = 0; index < 5; index++) {
//    forecast = response.data.list[index * 8];
//    forecastElement.innerHTML += ` 
//    <div class="col-2">
//      <li class="weatherForecast">${formatDayForecast(forecast.dt * 1000)}</li>
//      <li><img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" width="50%"/></li>
//      <li class="weatherForecast">${Math.round(forecast.main.temp_max)}º/${Math.round(forecast.main.temp_min)}ºC</li>
//    </div>`;
//  }
//}