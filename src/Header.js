import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Link to="/">
        <h1>Restcountries.eu Navigator</h1>
      </Link>
    </header>
  );
}

export default Header;