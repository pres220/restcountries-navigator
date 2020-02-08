import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import SortOrder from "./SortOrder";
import homeUrl from "./homeUrl";

function NavBar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="title">
          <Link to={homeUrl}><h1>Home</h1></Link>
        </li>
        <li className="search">
          <Search handleSubmit={props.handleSubmit}/>
        </li>
        <li className="sort-order">
          <SortOrder handleChange={props.handleChange}/>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;