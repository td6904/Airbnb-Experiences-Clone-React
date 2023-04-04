import React from "react";
import Star from "../images/star.png";
import Tyler from "../images/107479269.jpeg";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card-container">
      {/* <img src={`../images/${props.img}`} alt="tyler" className="tyler" width="200px" />  Can't get image to work!*/}
      <img
        src={Tyler}
        alt="tyler"
        className="tyler"
        width="200px"
      />
      <div className="card-stats">
        <img src={Star} alt="star" className="star" width="30px" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <b>From ${props.price}</b> / person
      </p>
    </div>
  );
}
