import React from "react";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import CountryNames from "./CountryNames";
import CountryLanguages from "./CountryLanguages";
import CountryList from "./CountryList";

class CountryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fetchSuccess: false,
      country: []
    }
  }

  componentDidMount() {
    const { alpha3Code } = this.props.match.params;
    this.fetchData(alpha3Code);
  }

  componentDidUpdate(prevProps) {
    const { alpha3Code } = this.props.match.params;
    if (alpha3Code !== prevProps.match.params.alpha3Code) {
      this.setState({ isLoading: true, fetchSuccess: false })
      this.fetchData(alpha3Code);
    }
  }

  fetchData(alpha3Code) {
    fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.text)
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ isLoading: false, fetchSuccess: true, country: data });
      })
      .catch(error => {
        console.error(error);
        this.setState({ isLoading: false })
      })
  }

  render() {
    if (this.state.isLoading) {
      return <h2 className="loading-msg">Loading...</h2>
    }

    if (!this.state.isLoading && !this.state.fetchSuccess) {
      return <NotFound />
    }

    return (
      <div className="country-detail">
        <h1>{this.state.country.name}</h1>
        <div className="country-detail-container">
          <div>
            <img
              className="country-detail-flag"
              src={this.state.country.flag}
              alt={`Flag of ${this.state.country.name}`}
              title={`Flag of ${this.state.country.name}`}
            />
          </div>

          <table>
            <thead>
              <tr>
                <th colSpan="2">Names</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{this.state.country.name}</td>
              </tr>
              <tr>
                <th>Native Name</th>
                <td>{this.state.country.nativeName}</td>
              </tr>
              <tr>
                <th>Alternate Spellings</th>
                <td>{this.state.country.altSpellings.join(", ")}</td>
              </tr>
              <tr>
                <th>Languages</th>
                <td>{this.state.country.languages.map(lang => (lang.name)).join(", ")}</td>
              </tr>
              <tr>
                <th>Demonym</th>
                <td>{this.state.country.demonym}</td>
              </tr>
              <tr>
                <th>Top Level Domain (TLD)</th>
                <td>{this.state.country.topLevelDomain.join(", ")}</td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th colSpan="2">Geography</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Region</th>
                <td>{this.state.country.region}</td>
              </tr>
              <tr>
                <th>Subregion</th>
                <td>{this.state.country.subregion}</td>
              </tr>
              <tr>
                <th>Capital</th>
                <td>{this.state.country.capital}</td>
              </tr>
              <tr>
                <th>Population</th>
                <td>
                  { this.state.country.population ? (
                      this.state.country.population.toLocaleString("en-US")
                    ) : 0
                  }
                </td>
              </tr>
              <tr>
                <th>Area</th>
                <td>
                  { this.state.country.area ? (
                      <span>{this.state.country.area.toLocaleString("en-US")} km<sup>2</sup></span>
                    ) : 0
                  }
                </td>
              </tr>
              <tr>
                <th>Bordering Countries</th>
                <td>
                  {this.state.country.borders ?
                    this.state.country.borders.map((border, index, borders) => (
                    <span key={border}>
                      <Link
                        to={`/countries/${border}`}
                      >
                        <span>{border}{index + 1 !== borders.length ? ", " : ""}</span>
                      </Link>
                    </span>
                  )) : <span>None</span> }
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    );
  }

}

export default CountryDetail;