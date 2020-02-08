import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();
  return (
    <div className="message">
      <div>
        <h2>No resource found for {location.pathname}</h2>
      </div>
    </div>
  );
}

export default NotFound;