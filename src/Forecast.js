import React, { useState } from "react";
import ForecastHour from "./ForecastHour";
import axios from "axios";
import "./Forecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <ForecastHour data={forecast.list[0]} />
        <ForecastHour data={forecast.list[1]} />
        <ForecastHour data={forecast.list[2]} />
        <ForecastHour data={forecast.list[3]} />
        <ForecastHour data={forecast.list[4]} />
        <ForecastHour data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "2e83a4b7ba2b243a8588825e9765fe5a";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}