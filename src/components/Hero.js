import React from "react";
import Collage from "../images/collage.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <img src={Collage} alt="collage" className="collage" />
      <div className="main-text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activites led by one-of-a-kind hosts without
          leaving home. Recommended from Airbnb and Tyler.
        </p>
      </div>
    </div>
  );
}
