import React from "react";
import Header from "./Header";
import Search from "./Search";
import CountryDetail from "./CountryDetail";

function DetailPage(props) {
  return (
    <React.Fragment>
      <Header>
        <Search handleSubmit={props.handleSubmit} />
      </Header>
      <CountryDetail countryData={props.countryData} {...props}/>
    </React.Fragment>
  );
}

export default DetailPage;