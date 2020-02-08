import React from "react";
import { Link } from "react-router-dom";
import homeUrl from "./homeUrl";

function CountryListItem(props) {
  const title = `Flag of ${props.name}`;

  return (
    <li className="country-list-item">
      <img
        src={props.flag}
        alt={title}
        title={title}
      />
      <div className="country-info">
        <Link to={`${homeUrl}/${props.alpha3Code}`}>
          <h3>{props.name}</h3>
        </Link>
        <p className="native-name">({props.nativeName})</p>
        <p>Population: {props.population.toLocaleString("en-US")}</p>
      </div>
    </li>
  );
}

export default CountryListItem;
