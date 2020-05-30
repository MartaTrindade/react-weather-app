import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastHour(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return `${day}`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°C`;
  }

  return (
    <div className="col-2">
      <li>{hours()}</li>
      <li><WeatherIcon code={props.data.weather[0].icon} /></li>
      <li>{temperature()}</li>
    </div>
  );
}

//  //⌛Hourly Forecast
//    for (let index = 0; index < 6; index++) {
//      return (
//        <div class="col-2">
//        <li class="weatherForecast">${formatLastUpdated(forecast.dt * 1000)}</li>
//        <li><WeatherIcon code={props.data.weather[0].icon} /></li>
//        <li class="weatherForecast">${Math.round(forecast.main.temp_max)}º/${Math.round(forecast.main.temp_min)}ºC</li>
//      </div>
//      );
//    }
//  }
////📆Daily Forecast
//  for (let index = 0; index < 5; index++) {
//    forecast = response.data.list[index * 8];  
//    return (
//      <div class="col-2">
//      <li class="weatherForecast">${formatLastUpdated(forecast.dt * 1000)}</li>
//      <li><WeatherIcon code={props.data.weather[0].icon} /></li>
//      <li class="weatherForecast">${Math.round(forecast.main.temp_max)}º/${Math.round(forecast.main.temp_min)}ºC</li>
//    </div>
//    );
//  }
//}