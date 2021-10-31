import React, { useState, useEffect } from "react";
import CityForm from "./components/CityForm";
import WeatherOutput from "./components/WeatherOutput";
import CityName from "./components/CityName";
import CityHistory from "./components/CityHistory";
import CurrencyConverter from "./components/CurrencyConverter";
import CityImage from "./components/CityImage";
import TestWeather from "./components/TestWeather";

import "./App.css";

function App() {
  const apikey = "927e91ee96236b7cd9c406dd5a8ee5e7";
  const [cityInput, setCityInput] = useState({});
  const [isValid, setIsValid] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState("");
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [photoIcon, setPhotoIcon] = useState();
  const [country, setCountry] = useState();

  const citySearchHandler = (home, destination) => {
    setCityInput({ homeCity: home, destCity: destination });
  };

  useEffect(() => {
    console.log("app city", cityInput.destCity);
    if (typeof cityInput.destCity != "undefined") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.destCity}&units=imperial&appid=${apikey}`
      )
        .then((response) => response.json())
        .then((result) => {
          // setLatLong(latitude, longitude);
          setIsValid(result);
          setWeather(result);
          setLatitude(result.coord.lat);
          setLongitude(result.coord.lon);
          setCountry(result.sys.country);
          setPhotoIcon(
            "http://openweathermap.org/img/wn/" +
              result.weather[0].icon +
              "@2x.png"
          );
          console.log("weather", result);
          console.log("country", result.sys.country);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });
    }
  }, [cityInput.destCity]);

  return (
    <React.Fragment>
      <h1>abeona</h1>
      <h2 className="description">
        Please enter your hometown and destination cities and we will display
        the information about the destination like weather, timezone and
        currency!
      </h2>
      <CityForm
        onCitySearch={citySearchHandler}
        cityInput={cityInput}
        setCityInput={setCityInput}
      />
      {typeof cityInput.destCity == "undefined" ? (
        ""
      ) : typeof isValid.main != "undefined" ? (
        <div className="all-outputs">
          <br></br>
          <CityName destination={cityInput} />
          <CityHistory destination={cityInput} />
          <CityImage destination={cityInput} />
          <TestWeather destination={cityInput} photoIcon = {photoIcon} country={country}/>
          {/* <WeatherOutput destination={cityInput} photoIcon = {photoIcon} country={country}/> */}
          <CurrencyConverter destination={cityInput} />
          <br></br>
        </div>
      ) : (
        <h2 className="error-city">
          Could not fetch city data, please ensure the destination is spelled
          correctly & exists
        </h2>
      )}
    </React.Fragment>
  );
}

export default App;
