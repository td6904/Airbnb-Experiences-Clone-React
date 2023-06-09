import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import "./style.css";
import data from "./data.js";
// import Tyler from "./images/107479269.jpeg";

export default function App() {
  const cardData = data.map((part) => {
    return <Card {...part} />;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-section">{cardData}</div>
    </>
  );
}
