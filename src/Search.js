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
    </form>
  );
}

export default Search;