import React, { useState, useEffect } from "react";
import TimeZoneOutput from "./TimeZoneOutput";

import "./WeatherOutput.css";

const WeatherOutput = (props) => {
  const apikey = "927e91ee96236b7cd9c406dd5a8ee5e7";
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [cityInput, setcityInput] = useState({});
  const [isValid, setIsValid] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.destination.destCity}&units=imperial&appid=${apikey}`
    )
      .then((response) => response.json())
      .then((result) => {
        setWeather(result);
        setLatitude(result.coord.lat);
        setLongitude(result.coord.lon);
        setcityInput(props.destination);
        setWeatherIcon(
          "http://openweathermap.org/img/wn/" +
            result.weather[0].icon +
            "@2x.png"
        );
        // setLatLong(latitude, longitude);
        console.log("weather", result);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [props.destination]);


  // Set status if city return failed 

  return (
    <React.Fragment>
      <div className="city-weather-item">
        {/* {error && <p>Cannot fetch weather data</p>} */}
        {typeof props.destination.destCity === "undefined" ? (
          ""
        ) : typeof weather.main != "undefined" ? (
          <div>
            <h2>Weather in {props.destination.destCity}</h2>
            <div className="city-weather">
              <img src={weatherIcon} />
              <p>{weather.weather[0].main}</p>
            </div>

            <div className="city-temp">
              <p>{Math.round(weather.main.temp)} ° F</p>
            </div>
          </div>
        ) : (
          <div className="weather-error">
            <h2>Weather unavailable</h2>
            <br></br>
            <div>
              Weather for that location is unavailable
            </div>
            <div>
              Please make sure the destination city is spelled correctly & search again
            </div>
            <br></br>
          </div>
        )}
      </div>
      <TimeZoneOutput
        latitude={latitude}
        longitude={longitude}
        cityInput={cityInput}
      />
    </React.Fragment>
  );
};

export default WeatherOutput;
