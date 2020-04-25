import React from 'react';
import axios from 'axios';

export default function Weather (props) {
  function searchCity (response) {
    console.log(`The weather in ${response.data.name} is ${response.data.main.temp}ºC`);
  }
  let apiKey = "2e83a4b7ba2b243a8588825e9765fe5a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(searchCity);
  return (
    <div>
      The currente weather in <span id="city"></span> is <span id="temperature"></span>
    </div>
  )
}