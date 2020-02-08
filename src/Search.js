import React from "react";

function Search(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        name="searchQuery"
        type="search"
        placeholder="Enter Country ..."
        required
      />
      <button>Search</button>
    </form>
  );
}

export default Search;