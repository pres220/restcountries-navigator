import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();
  return (
    <div className="message">
      <h2>No resource found for {location.pathname}</h2>
    </div>
  );
}

export default NotFound;