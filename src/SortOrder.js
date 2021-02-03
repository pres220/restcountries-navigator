import React from "react";

function SortOrder(props) {
  return (
    <select
      name="sortOrder"
      value={props.sortOrder}
      onChange={props.handleSortOrderChange}
    >
      <option value="">Sort Order</option>
      <option value="alpha">A-Z</option>
      <option value="alphaReverse">Z-A</option>
      <option value="pop">Population &#8679;</option>
      <option value="popReverse">Population &#8681;</option>
    </select>
  );
}

export default SortOrder;