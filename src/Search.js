import React from "react";

function Search(props) {
  return (
    <div className="search">
      <form onSubmit={props.handleSubmit}>
        <input
          name="searchQuery"
          type="text"
          placeholder="Search ..."
        />
        <button className="search-button">Submit Query</button>
      </form>
      <select
        name="sortBy"
        value={props.sortBy}
        onChange={props.handleChange}
      >
        <option value="">Sort by</option>
        <option value="alpha">A-Z</option>
        <option value="alphaReverse">Z-A</option>
        <option value="pop">Population &#8679;</option>
        <option value="popReverse">Population &#8595;</option>
      </select>
    </div>
  );
}

export default Search;