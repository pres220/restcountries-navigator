import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";

function NotFound(props) {
  const location = useLocation();
  return (
    <React.Fragment>
      <Header>
        <Search handleSubmit={props.handleSubmit}/>
      </Header>
      <h2 className="not-found">No resource found for {location.pathname}</h2>
    </React.Fragment>
  );
}

export default NotFound;