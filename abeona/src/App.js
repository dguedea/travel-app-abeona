import React, { useState } from "react";
import CityForm from "./components/CityForm";
import WeatherOutput from "./components/WeatherOutput";
import CityName from "./components/CityName";
import CityHistory from "./components/CityHistory";

import "./App.css";

function App() {
  const [cityInput, setCityInput] = useState({});
  // const [latLong, setLatLong] = useState({});

  const citySearchHandler = (home, destination) => {
    setCityInput({ homeCity: home, destCity: destination });
  };

  // const latLongHandler = (lat, long) => {
  //   setLatLong({ latitude: lat, longitude: long });
  //   console.log(latLong);
  // };

  return (
    <React.Fragment>
      <h1>abeona</h1>
      <h2 className="description">
        Please enter your hometown and destination and we will display the
        weather, currency and information about the destination
      </h2>
      <CityForm
        onCitySearch={citySearchHandler}
        cityInput={cityInput}
        setCityInput={setCityInput}
      />
      <div className="all-outputs">
        <br></br>
        <CityName destination={cityInput} />
        <WeatherOutput
          destination={cityInput} />
        <CityHistory destination={cityInput}/>
        <br></br>
      </div>
    </React.Fragment>
  );
}

export default App;
