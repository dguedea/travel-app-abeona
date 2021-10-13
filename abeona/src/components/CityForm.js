import React, { useState } from "react";

import "./CityForm.css";

const CityForm = (props) => {
  const [enteredHome, setEnteredHome] = useState('');
  const [enteredDest, setEnteredDest] = useState('');

  const homeCityChangeHandler = (event) => {
    setEnteredHome(event.target.value);
  };

  const destCityChangeHandler = (event) => {
    setEnteredDest(event.target.value);
  };

  const searchCityHandler = (event) => {
    event.preventDefault();
    if (enteredHome.trim().length === 0 || enteredDest.trim().length === 0) {
      return;
    }
    props.onCitySearch(enteredHome, enteredDest);
    setEnteredDest("");
    setEnteredHome("");
  };

  return (
    <React.Fragment>
      <form onSubmit={searchCityHandler}>
        <label htmlFor="home">Enter your Home City</label>
        <input
          onChange={homeCityChangeHandler}
          id="home"
          type="text"
          value={enteredHome}
        ></input>
        <label htmlFor="destination">Enter the Destination City</label>
        <input
          onChange={destCityChangeHandler}
          id="destination"
          type="text"
          value={enteredDest}
        ></input>
        <button type="submit">Search</button>
      </form>
    </React.Fragment>
  );
};

export default CityForm;
