import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import "./style.css";
import "./images/107479269.jpeg"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card 
          // img="107479269.jpeg"
          rating={5.0}
          reviewCount={6}
          country="USA"
          title="Chilling with Tyler"
          price={20}
          />
      </>
  );
}
