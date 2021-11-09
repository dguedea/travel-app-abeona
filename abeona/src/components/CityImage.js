/*
* Name: CityImage
* Description: Displays image of destination from Jenn's microservice
* Takes: destination city input from CityForm and sizing numbers
* Outputs: component with photo of city
*/

import React, { useState } from "react";

import "./CityImage.css";

const CityImage = (props) => {

  return (
    <React.Fragment>
      {typeof props.destination.destCity != "undefined" && (
        <div className="city-image-item">
          <img
          // Use Jenn's image microservice to dynamically populate photo of city based on 
          // destination city input from user
            src={`https://lamjenni-image.herokuapp.com/${props.destination.destCity},500,300`}
            alt="city image"
          />
          <div className="city-image-description">
            A taste of what {props.destination.destCity} looks like!
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CityImage;
