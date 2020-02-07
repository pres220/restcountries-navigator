import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Link to="/restcountries-navigator">
        <h1>Home</h1>
      </Link>
      {props.children}
    </header>
  );
}

export default Header;