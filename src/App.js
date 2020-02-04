import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import CountryList from "./CountryList";
import Header from "./Header";
import Search from "./Search";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      countryData: [],
      tempData: [],
      sortBy: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("fetching data");
    fetch("https://restcountries.eu/rest/v2/all?fields=name;nativeName;population;alpha3Code;flag")
      .then(response => response.json())
      .then(data => this.setState({ isLoading: false, countryData: data, tempData: data }))
      .catch(error => console.error(error));
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      sortBy: value,
      tempData: this.sortCountryData(prevState.countryData, value)
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const query = e.target.elements["searchQuery"].value.toLowerCase();
    console.log("Submitted", query);
    const country = this.state.countryData.find(country => country.name.toLowerCase() === query)
    if (country) {
      this.props.history.push(`/${country.alpha3Code}`);
    } else {
      this.props.history.push()
    }
  }

  sortCountryData(arr, sortBy) {
    switch (sortBy) {
      case "alpha":
          arr.sort((a, b) => a.name.localeCompare(b.name));
          break;
      case "alphaReverse":
          arr.sort((a, b) => b.name.localeCompare(a.name));
          break;
      case "pop":
          arr.sort((a, b) => a.population - b.population);
          break;
      case "popReverse":
          arr.sort((a, b) => b.population - a.population);
          break;
      default:
          return arr;
    }
    return arr;
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/:alpha3Code" component={CountryDetail} />
          <Route path="/" >
            <Search
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <CountryList isLoading={this.state.isLoading} countryData={this.state.tempData} />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
