import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import CountryList from "./CountryList";
import Header from "./Header";
import Search from "./Search";
import NotFound from "./NotFound";


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
    const form = e.target;
    const query = form.elements["searchQuery"].value;
    const country = this.state.countryData.find(country => country.name.toLowerCase() === query.toLowerCase())
    if (country) {
      this.props.history.push(`/countries/${country.alpha3Code}`);
    } else {
      alert(`No country found matching "${query}"`);
      form.reset();
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
          <Route exact path="/" >
            { this.state.isLoading ? (
                <h1 className="loading-msg">Loading...</h1>
              ) : (
                <React.Fragment>
                  <Search
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                  />
                  <CountryList countryData={this.state.tempData} />
                </React.Fragment>
              )
            }
          </Route>
          <Route path="/countries/:alpha3Code" component={CountryDetail} />
          <Route path="/not-found" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
