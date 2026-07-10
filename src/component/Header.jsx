import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <header>
      <h2>My Website</h2>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
        <Link to="/service">Service</Link>
      </nav>

      <hr />
    </header>
  );
}

export default Header;