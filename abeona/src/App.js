import React, { useState } from "react";
import CityForm from './components/CityForm';
import WeatherOutput from './components/WeatherOutput';

import "./App.css";

function App() {
  const [cityInput, setCityInput] = useState({homeCity: 'New York', destCity: 'New York'});

  const citySearchHandler = (home, destination) => {
    setCityInput({homeCity: home, destCity: destination})
  }

  return (
    <React.Fragment>
      <h2>abeona</h2>
      <CityForm onCitySearch={citySearchHandler} cityInput={cityInput} setCityInput={setCityInput}/>
      <WeatherOutput destination={cityInput} />
    </React.Fragment>
  );
}

export default App;
