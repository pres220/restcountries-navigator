import React from "react";

function ConnectionError() {
  return (
    <div className="message">
      <h1>Connection error!</h1>
      <h2>A connection to the Restcountries.eu API could not be established.</h2>
    </div>
  )
}

export default ConnectionError;