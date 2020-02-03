import React from "react";

function Header(props) {
  return (
    <header>
      <h1>Restcountries.eu Navigator</h1>
      <div className="search-sort-controls">
        <input
          type="text"
          placeholder="Search..."
          name="searchQuery"
          value={props.searchQuery}
          onChange={props.handleChange}
        />
        <select
          value={props.sortBy}
          onChange={props.handleChange}
          name="sortBy"
        >
          <option value="">Sort by</option>
          <option value="alpha">A-Z</option>
          <option value="alphaReverse">Z-A</option>
          <option value="pop">Population (ascending order)</option>
          <option value="popReverse">Population (descending order)</option>
        </select>
      </div>
    </header>
  );
}

export default Header;