/*
* Name: CityName
* Description: Displays name of city searched
* Takes: destination city input from CityForm 
* Outputs: component with name of destination city 
*/

import React from "react";

import './CityName.css';

// Simple component to display the destination city
const CityName = (props) => {
  return (
    <React.Fragment>
      {props.destination.destCity && (
        <div className="city-welcome">
          On your way to travel to {props.destination.destCity}
        </div>
      )}
    </React.Fragment>
  );
};

export default CityName;
