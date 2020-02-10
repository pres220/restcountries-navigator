import React from "react";
import { Link } from "react-router-dom";

function GeographyTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">Geography</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Region</th>
          <td>{props.region || "N/A"}</td>
        </tr>
        <tr>
          <th>Subregion</th>
          <td>{props.subregion || "N/A"}</td>
        </tr>
        <tr>
          <th>Capital</th>
          <td>{props.capital || "N/A"}</td>
        </tr>
        <tr>
          <th>Population</th>
          <td>
            { props.population ? (
                props.population.toLocaleString("en-US")
              ) : 0
            }
          </td>
        </tr>
        <tr>
          <th>Area</th>
          <td>
            { props.area ? (
                <span>{props.area.toLocaleString("en-US")} km<sup>2</sup></span>
              ) : "N/A"
            }
          </td>
        </tr>
        <tr>
          <th>Bordering Countries</th>
          <td>
            { props.borders.length ?
                props.borders.map((border, index, borders) => (
                <span key={border}>
                  <Link to={`/${border}`} >
                    <span>{border}{index + 1 !== borders.length ? ", " : ""}</span>
                  </Link>
                </span>
              )) : "N/A"
            }
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default GeographyTable;