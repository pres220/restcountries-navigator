import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import DetailPage from "./DetailPage"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      countryData: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("fetching data");
    fetch("https://restcountries.eu/rest/v2/all?fields=name;nativeName;altSpellings;population;alpha3Code;flag")
      .then(response => response.json())
      .then(data => this.setState({ isLoading: false, countryData: data }))
      .catch(error => console.error(error));
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      countryData: this.sortCountryData(value)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const query = e.target.elements["searchQuery"].value.toLowerCase();
    const country = this.state.countryData.find(country => (
      country.name.toLowerCase() === query ||
      country.nativeName.toLowerCase() === query ||
      country.altSpellings.some(name => name.toLowerCase() === query)
    ));
    if (country) {
      this.props.history.push(`/countries/${country.alpha3Code}`);
    } else {
      alert("No country found matching query.");
      e.target.reset();
    }
  }

  sortCountryData(sortBy) {
    const arr = this.state.countryData;
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
        <Switch>
          <Route exact path="/" >
            <Home
              isLoading={this.state.isLoading}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              countryData={this.state.countryData}
            />
          </Route>
          <Route exact path="/countries/:alpha3Code" render={(props) => (
            <DetailPage handleSubmit={this.handleSubmit} {...props}/>
          )}/>
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
