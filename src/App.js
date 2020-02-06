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
        console.error(error)
        this.setState({ isLoading: false, fetchSuccess: false })
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
      this.props.history.push(`/countries/${country.alpha3Code}`);
    } else {
      alert("No country found matching query.");
      e.target.reset();
    }
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
      return <h1 className="loading-msg">Loading...</h1>;
    }

    if (!(this.state.isLoading || this.state.fetchSuccess)) {
      return (
        <div>
          <h1>Connection error!</h1>
          <h2>A connection to the Restcountries.eu API could not be established.</h2>
        </div>
      )
    }

    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" >
            <Home
              isLoading={this.state.isLoading}
              fetchSuccess={this.state.fetchSuccess}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              countryData={this.state.countryData}
              sortOrder={this.state.sortOrder}
            />
          </Route>
          <Route exact path="/countries/:alpha3Code" render={(props) => (
            <DetailPage
              handleSubmit={this.handleSubmit}
              countryData={this.state.countryData}
              {...props}
            />
          )}/>
          <Route>
            <NotFound showHeader={true} handleSubmit={this.handleSubmit}/>
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
