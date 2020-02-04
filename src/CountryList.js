import React from "react";
import CountryListItem from "./CountryListItem";

function CountryList(props) {

  const countryList = props.countryData.map(country => (
    <CountryListItem
      key={country.alpha3Code}
      name={country.name}
      nativeName={country.nativeName}
      flag={country.flag}
      population={country.population}
      alpha3Code={country.alpha3Code}
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
