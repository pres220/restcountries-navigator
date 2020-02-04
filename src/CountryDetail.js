import React from "react";
import { Link } from "react-router-dom";

class CountryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
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
      this.fetchData(alpha3Code);
    }
  }

  fetchData(alpha3Code) {
    fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
      .then(response => response.json())
      .then(data => this.setState({ isLoading: false, country: data }))
      .catch(error => console.error(error))
  }

  render() {
    console.log(this.state.country.name);
    return (
      <div className="country-detail">
        <h2>{this.state.country.name}</h2>
        <img
          src={this.state.country.flag}
          alt={`Flag of ${this.state.country.name}`}
          title={`Flag of ${this.state.country.name}`}
        />
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{this.state.country.name}</td>
            </tr>
            <tr>
              <th>Demonym</th>
              <td>{this.state.country.demonym}</td>
            </tr>
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
              <td>{this.state.country.population}</td>
            </tr>
            <tr>
              <th>Area</th>
              <td>{this.state.country.area}</td>
            </tr>
            <tr>
              <th>Bordering Countries</th>
              <td>
                {this.state.country.borders ?
                  this.state.country.borders.map((border, index, borders) => (
                  <span key={border}>
                    <Link
                      to={`/${border}`}
                    >
                      <span>{border} {index + 1 !== borders.length ? ", " : ""}</span>
                    </Link>
                  </span>
                )) : null }
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    );
  }

}

export default CountryDetail;