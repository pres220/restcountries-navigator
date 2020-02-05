import React from "react";

function SortBy(props) {
  return (
    <select
      name="sortBy"
      value={props.sortBy}
      onChange={props.handleChange}
    >
      <option value="">Sort By</option>
      <option value="alpha">A-Z</option>
      <option value="alphaReverse">Z-A</option>
      <option value="pop">Population &#8679;</option>
      <option value="popReverse">Population &#8681;</option>
    </select>
  );
}

export default SortBy;