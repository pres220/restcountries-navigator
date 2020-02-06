import React from "react";
import Header from "./Header";
import Search from "./Search";
import SortOrder from "./SortOrder";
import CountryList from "./CountryList";

function Home(props) {
  return (
    <React.Fragment>
      <Header>
        <Search handleSubmit={props.handleSubmit} />
        <SortOrder sortOrder={props.sortOrder} handleChange={props.handleChange}/>
      </Header>
      <CountryList countryData={props.countryData} />
    </React.Fragment>
  )
}

export default Home;