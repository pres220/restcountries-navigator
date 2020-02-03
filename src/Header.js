import React from "react";

function Header(props) {
  return (
    <header>
      <h1>Restcountries.eu Navigator</h1>
      <div className="search-sort-controls">
        <input
          name="searchQuery"
          value={props.searchQuery}
          onChange={props.handleChange}
          type="text"
          placeholder="Search..."
        />
        <select
          name="sortBy"
          value={props.sortBy}
          onChange={props.handleChange}
        >
          <option value="">Sort by</option>
          <option value="alpha">A-Z</option>
          <option value="alphaReverse">Z-A</option>
          <option value="pop">Population (Ascending)</option>
          <option value="popReverse">Population (Descending)</option>
        </select>
      </div>
    </header>
  );
}

export default Header;