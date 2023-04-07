import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import "./style.css";
import data from "./data.js";
// import Tyler from "./images/107479269.jpeg";

export default function App() {
  const cardData = data.map((part) => {
    return (
      <Card
        title={part.title}
        price={part.price}
        coverImg={part.coverImg}
        rating={part.stats.rating}
        reviewCount={part.stats.reviewCount}
        location={part.location}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-section">
      {cardData}
      </div>
    </>
  );
}
