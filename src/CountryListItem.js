import React from "react";

function CountryListItem(props) {
  const title = `Flag of ${props.name}`;
  const population = props.population.toLocaleString("en-US");

  return (
    <li className="country-list-item">
        <img
          src={`${props.flag}#svgView(preserveAspectRatio(none))`}
          alt={title}
          title={title}
        />
        <div className="country-info">
          <a href={props.name}>
            <h3>{props.name}</h3>
          </a>
          <p>Population: {population}</p>
        </div>
    </li>
  );
}

export default CountryListItem;
