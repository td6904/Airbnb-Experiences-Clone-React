import React from "react";
import logo from "../images/airbnb-logo.jpeg"
// import "../style.css"


export default function Navbar(){
    return (
      <nav className="navbar">
      <img className="logo" src={logo} alt="airbnb" width="150px" />
      </nav>
    )
  }