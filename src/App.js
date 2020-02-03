import React from "react";
import CountryList from "./CountryList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countryData: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => this.setState({ countryData: data }))
      .catch(error => console.error(error));
  }

  render() {
    console.log("this.state.countryData", this.state.countryData);
    return (
      <React.Fragment>
        <CountryList countryData={this.state.countryData} />
      </React.Fragment>
    );
  }
}

export default App;
