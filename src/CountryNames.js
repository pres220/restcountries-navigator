import React from "react";

function CountryNames(props) {
  return (
    <div className="country-names">
      <h2>Names</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Native Name</th>
            <td>{props.nativeName}</td>
          </tr>
          <tr>
            <th>Alternate Spellings</th>
            <td>{props.altSpellings.join(", ")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryNames;