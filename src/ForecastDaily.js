import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastHour(props) {
  const unitLabel = props.data.unitSystem === "imperial" ? 'F' : 'C';

  function hours() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return `${day}`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    let unit = props.unitSystem;

    return `${temperature}°${unitLabel}`;
  }

  return (
    <div className="col-2">
      <li>{hours()}</li>
      <li><WeatherIcon code={props.data.weather[0].icon} /></li>
      <li>{temperature()}</li>
    </div>
  );
}