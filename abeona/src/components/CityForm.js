/*
* Name: CityForm
* Description: Displays a contact form to user.  Gathers user input for home and destination
* city and passes that information back to the App component for other components to use
* If contact form is submitted, collapses form until users chooses to search again
*/

import React, { useState } from "react";

import "./CityForm.css";

const CityForm = (props) => {
  const [enteredHome, setEnteredHome] = useState("");
  const [enteredDest, setEnteredDest] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Pops up contact form when IsEditing is true
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  // Collapses contact form when IsEditing is false
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  // Sets home city to pass to app component
  const homeCityChangeHandler = (event) => {
    setEnteredHome(event.target.value);
  };

  // Sets destination city to pass to app component
  const destCityChangeHandler = (event) => {
    setEnteredDest(event.target.value);
  };

  // Takes input from contact form and stores in onCitySearch variable
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
