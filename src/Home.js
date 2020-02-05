import React from "react";
import Header from "./Header";
import Search from "./Search";
import SortBy from "./SortBy";
import CountryList from "./CountryList";

function Home(props) {
  return (
    props.isLoading ? (
      <h1 className="loading-msg">Loading...</h1>
    ) : (
      <React.Fragment>
        <Header>
          <Search handleSubmit={props.handleSubmit} />
          <SortBy handleChange={props.handleChange}/>
        </Header>
          <CountryList countryData={props.state.tempData} />
      </React.Fragment>
    )
  );
}

export default Home;