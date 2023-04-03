import React from "react";
import Tyler from "../images/107479269.jpeg";
import Star from "../images/star.png";

export default function Card() {
  return (
    <div className="card-container">
      <img src={Tyler} alt="tyler" className="tyler" width="200px" />
      <div className="card-stats">
        <img src={Star} alt="star" className="star" width="30px" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Chilling with Tyler</p>
      <p><b>From $20</b> / person</p>
    </div>
  );
}
