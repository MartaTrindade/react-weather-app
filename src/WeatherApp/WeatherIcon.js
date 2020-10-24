import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
//import { GenIcon } from "weather-icons-react";

export default function WeatherIcon(props) {
  const codeMapping = {
    //"01d": "WiDaySunny",
    //"01n": "WiMoonFull",
    //"02d": "WiDaySunnyOvercast",
    //"02n": "WiNightAltCloudy",
    //"03d": "WiCloud",
    //"03n": "WiNightAltCloudy",
    //"04d": "WiCloudy",
    //"04n": "WiCloudy",
    //"09d": "WiDayShowers",
    //"09n": "WiNightAltHail",
    //"10d": "WiDayRain",
    //"10n": "WiNightAltRainMix",
    //"11d": "WiDayLightning",
    //"11n": "WiNightAltLightning",
    //"13d": "WiDaySnow",
    //"13n": "WiNightSnow",
    //"50d": "WiDayFog",
    //"50n": "WiNightFog"
    
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG"
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#61dafb"
      size={80}
      animate={true}
    />

    //<GenIcon
    //icon={codeMapping[props.code]}
    //size={80}
    //color='#045D8D'
    ///>
  );
}