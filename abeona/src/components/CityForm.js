import React, { useState } from "react";

import "./CityForm.css";

const CityForm = (props) => {
  const [enteredHome, setEnteredHome] = useState("");
  const [enteredDest, setEnteredDest] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

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
    setIsEditing(false);
  };

  return (
    <React.Fragment>
      {!isEditing && (
        <div className="newcity_controls">
          <button className="newcity_search_button" onClick={startEditingHandler}>
            Search Destination
          </button>
        </div>
      )}
      {isEditing && (
        <form onSubmit={searchCityHandler}>
          <div className="newcity_controls">
            <div className="newcity_control">
              <label htmlFor="home">Enter your Home City</label>
              <input
                onChange={homeCityChangeHandler}
                id="home"
                type="text"
                value={enteredHome}
              ></input>
            </div>
            <div className="newcity_control">
              <label htmlFor="destination">Enter the Destination City</label>
              <input
                onChange={destCityChangeHandler}
                id="destination"
                type="text"
                value={enteredDest}
              ></input>
            </div>
            <div className="newcity_actions">
              <button type="button" onClick={stopEditingHandler}>
                Cancel
              </button>
              <button type="submit">Search</button>
            </div>
          </div>
        </form>
      )}
    </React.Fragment>
  );
};

export default CityForm;
