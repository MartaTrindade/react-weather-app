import React, { useState, useEffect } from "react";

import "./App.css";

export default function Location(props) {
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = days[props.date.getDay()];
  let dateDay = props.date.getDate();
  let months = ["January","February","March","April","May","June","July","August","Setptember","October","November","December"];
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  
  //⏰Machine timestamp
  const [clock, setClock] = useState(new Date());
  const clockDate = `${clock.getHours()}:${clock.getMinutes()}:${clock.getSeconds()}`;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  //API timestamp
  let hours = props.date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
  let minutes = props.date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
  return (
    <div className="location">
      <form className="searchform">
          <input type="form" className="location" placeholder="Location" autoComplete="off" autoFocus="on" />
          <button type="submit" className="btn-dark">Search</button>
          <button type="Current Location" className="btn-light">Current Location</button>
      </form>
      <br />
      <h2>
        <ul>
          <li><i className="fas fa-map-marker-alt" />{" "}<span>{props.city}</span></li>
          <li><span>{day}, {dateDay} {month} {year} {clockDate}</span></li>
          <li><span className="last-updated">Last updated: {hours}:{minutes}</span></li>
        </ul>
      </h2>
    </div>
  );
}