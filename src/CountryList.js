import React from "react";
import CountryListItem from "./CountryListItem";

function CountryList(props) {

  const countryList = props.countryData.map(country => (
    <CountryListItem
      key={country.numericCode}
      name={country.name}
      flag={country.flag}
      population={country.population}
    />
  ));

  return (
    <ul className="country-list">
      { props.isLoading && <h3>Loading...</h3>}
      { !props.isLoading && countryList }
    </ul>
  );
}

export default CountryList;
