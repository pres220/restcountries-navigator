import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import homeUrl from "./homeUrl";
import ConnectionError from "./ConnectionError";
import CountryDetail from "./CountryDetail";
import CountryList from "./CountryList";
import Loading from "./Loading";
import NavBar from "./NavBar";
import NotFound from "./NotFound";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      fetchSuccess: false,
      countryData: [],
      sortOrder: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => {
        if (!response.ok) {
          throw Error(response.text);
        }
        return response;
      })
      .then(response => response.json())
      .then(json => this.setState({
          isLoading: false,
          fetchSuccess: true,
          countryData: json
      }))
      .catch(error => {
        console.error(error);
        this.setState({
          isLoading: false,
          fetchSuccess: false
        });
      });
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      sortOrder: value,
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
      this.props.history.push(`${homeUrl}/${country.alpha3Code}`);
    } else {
      alert("No country found matching query.");
    }
    e.target.reset();
    e.target.firstChild.blur();
  }

  sortCountryData(sortOrder) {
    const arr = this.state.countryData;
    switch (sortOrder) {
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
    if (this.state.isLoading) {
      return <Loading />;
    } else if (!this.state.fetchSuccess) {
      return <ConnectionError />;
    }

    return (
      <React.Fragment>
        <NavBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />

        <Switch>
          <Route exact path={homeUrl} >
            <CountryList countryData={this.state.countryData} />
          </Route>
          <Route exact path={`${homeUrl}/:alpha3Code`} render={(props) => (
            <CountryDetail countryData={this.state.countryData} {...props} />
          )}/>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
