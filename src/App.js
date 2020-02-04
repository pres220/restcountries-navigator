import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CountryList from "./CountryList";
import Header from "./Header";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      countryData: [],
      tempData: [],
      searchQuery: "",
      sortBy: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => this.setState({ isLoading: false, countryData: data, tempData: data }))
      .catch(error => console.error(error));
  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "sortBy") {
      this.setState(prevState => ({
        [name]: value,
        tempData: this.sortCountryData(prevState.countryData, value)
      }));
    } else if (name === "searchQuery") {
      this.setState(prevState => ({
        [name]: value,
        tempData: prevState.countryData.filter(country => country.name.toLowerCase().includes(value.toLowerCase()))
      }));
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
        <Header searchQuery={this.state.searchQuery} handleChange={this.handleChange}/>
        <Switch>
          <Route path="/countries/:id">
          </Route>
          <Route path="/">
            <CountryList isLoading={this.state.isLoading} countryData={this.state.tempData} />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
