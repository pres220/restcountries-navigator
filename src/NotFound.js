import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();
  return (
    <h2 className="not-found">No resource found for {location.pathname}</h2>
  );
}

export default NotFound;