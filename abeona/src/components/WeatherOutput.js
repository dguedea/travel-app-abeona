import React, { useState, useEffect } from "react";

import "./WeatherOutput.css";

const WeatherOutput = (props) => {
  const apikey = "927e91ee96236b7cd9c406dd5a8ee5e7";
  const [weather, setWeather] = useState();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.destination.destCity}&units=imperial&appid=${apikey}`
    )
      .then((response) => response.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  }, [props.destination]);

  return (
    <React.Fragment>
      <h2>Weather in {props.destination.destCity}</h2>
      <p>{weather.main.temp} degrees Fahrenheit</p>
      <p>It is {weather.weather[0].main}</p>
    </React.Fragment>
  );
};

export default WeatherOutput;
