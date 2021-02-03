import React from "react";

function Search(props) {
  return (
    <form onSubmit={props.handleSearchQuerySubmit}>
      <input
        name="searchQuery"
        type="search"
        placeholder="Search ..."
        required
      />
      <button>Submit</button>
    </form>
  );
}

export default Search;