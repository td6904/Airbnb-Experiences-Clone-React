import React from "react";
import Star from "../images/star.png";
import data from "../data";
// import Tyler from "../images/107479269.jpeg";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card-container">
      {badgeText && <div className="sold-out">{badgeText}</div>}
      {/* <img src={`../images/${props.img}`} alt="tyler" className="tyler" width="200px" />  Can't get image to work!*/}
      <img
        src={props.coverImg}
        alt="tyler"
        className="tyler"
        height="250px"
      />
      <div className="card-stats">
        <img src={Star} alt="star" className="star" width="30px" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <b>From ${props.price}</b> / person
      </p>
    </div>
  );
}
