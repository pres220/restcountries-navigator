import React from "react";
import { Link } from "react-router-dom";

function CountryListItem(props) {
  const title = `Flag of ${props.name}`;
  const population = props.population.toLocaleString("en-US");

  return (
    <li className="country-list-item">
      <img
        src={props.flag}
        alt={title}
        title={title}
      />
      <div className="country-info">
        <Link to={`/restcountries-navigator/countries/${props.alpha3Code}`}>
          <h3>{props.name}</h3>
        </Link>
        <p className="native-name">({props.nativeName})</p>
        <p>Population: {population}</p>
      </div>
    </li>
  );
}

export default CountryListItem;
