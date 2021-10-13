import React from "react";

import './CityName.css';

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
