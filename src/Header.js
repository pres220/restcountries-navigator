import React from "react";

function Header(props) {
  return (
    <header>
      <h1>Restcountries.eu Navigator</h1>
      <div className="search-sort-controls">
        <input type="text" placeholder="Search..." />
        <select>
          <option selected value="">Sort by</option>
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
          <option value="populationAscending">Population (ascending order)</option>
          <option value="populationDescending">Population (descending order)</option>
        </select>
      </div>
    </header>
  );
}

export default Header;