import React from "react";

function Search(props) {
  return (
    <div className="search">
      <form onSubmit={props.handleSubmit}>
        <input
          name="searchQuery"
          type="text"
          placeholder="Enter Country ..."
          required
        />
        <button className="search-button">Submit Query</button>
      </form>
    </div>
  );
}

export default Search;