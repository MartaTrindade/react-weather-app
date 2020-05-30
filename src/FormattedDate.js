import React, { useState, useEffect } from "react";

export default function FormattedDate(props) {
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = days[props.date.getDay()];
  let dateDay = props.date.getDate();
  let months = ["January","February","March","April","May","June","July","August","Setptember","October","November","December"];
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  
  //⏰Machine timestamp
  const [clock, setClock] = useState(new Date());
  const clockDate = `${clock.getHours()}:${clock.getMinutes()}`;
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
      <div>
        <li><span>{day}, {dateDay} {month} {year} {clockDate}</span></li>
        <li><span className="last-updated">Last updated: {hours}:{minutes}</span></li>
      </div>
    );
}