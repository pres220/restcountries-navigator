import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import SortOrder from "./SortOrder";

function NavBar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="title">
          <Link to="/"><h1>Home</h1></Link>
        </li>
        <li className="search">
          <Search handleSearchQuerySubmit={props.handleSearchQuerySubmit}/>
        </li>
        <li className="sort-order">
          <SortOrder handleSortOrderChange={props.handleSortOrderChange}/>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;