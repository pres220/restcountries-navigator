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
    const { value } = e.target;
    this.setState(prevState => ({
      sortBy: value,
      tempData: this.sortCountryData(prevState.countryData, value)
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit");
    const query = e.target.elements["searchQuery"].value.toLowerCase();
    const country = this.state.countryData.find(country => country.name.toLowerCase() === query);
    if (country) {
      this.props.history.push(`/countries/${country.alpha3Code}`);
    } else {
      alert("No country found matching query.");
      e.target.reset();
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
        <Switch>
          <Route exact path="/" >
            <Home
              isLoading={this.state.isLoading}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              countryData={this.state.tempData}
            />
          </Route>
          <Route exact path="/countries/:alpha3Code" render={(props) => (
            <DetailPage handleSubmit={this.handleSubmit} {...props}/>
          )}/>
          <Route path="/not-found" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
