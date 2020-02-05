import React from "react";

function NamesTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">Names</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Name</th>
          <td>{props.name || "N/A"}</td>
        </tr>
        <tr>
          <th>Native Name</th>
          <td>{props.nativeName || "N/A"}</td>
        </tr>
        <tr>
          <th>Alternate Spellings</th>
          <td>{props.altSpellings.join(", ") || "N/A"}</td>
        </tr>
        <tr>
          <th>Languages</th>
          <td>{props.languages.map(lang => (lang.name)).join(", ") || "N/A"}</td>
        </tr>
        <tr>
          <th>Demonym</th>
          <td>{props.demonym || "N/A"}</td>
        </tr>
        <tr>
          <th>Top Level Domain (TLD)</th>
          <td>{props.topLevelDomain.join(", ") || "N/A"}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default NamesTable;