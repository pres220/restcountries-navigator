import React from "react";
import NotFound from "./NotFound";
import NamesTable from "./NamesTable";
import GeographyTable from "./GeographyTable";

class CountryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      countryIsFound: false,
      country: []
    }
  }

  componentDidMount() {
    const { alpha3Code } = this.props.match.params;
    this.getCountryData(alpha3Code);
  }

  componentDidUpdate(prevProps) {
    const { alpha3Code } = this.props.match.params;
    if (alpha3Code !== prevProps.match.params.alpha3Code) {
      this.setState({ isLoading: true })
      this.getCountryData(alpha3Code);
    }
  }

  getCountryData(alpha3Code) {
    const country = this.props.countryData.find(country => country.alpha3Code === alpha3Code)
    if (country) {
      this.setState({ isLoading: false, country: country, countryIsFound: true });
    } else {
      this.setState({ isLoading: false, countryIsFound: false })
    }
  }

  render() {
    if (this.state.isLoading) {
      return <h2 className="loading-msg">Loading...</h2>
    }

    if (!(this.state.isLoading || this.state.countryIsFound)) {
      return <NotFound showHeader={false} />
    }

    return (
      <div className="country-detail">
        <h1>{this.state.country.name}</h1>
        <div className="country-detail-container">
          <div className="country-detail-flag">
            <img
              src={this.state.country.flag}
              alt={`Flag of ${this.state.country.name}`}
              title={`Flag of ${this.state.country.name}`}
            />
          </div>

          <NamesTable
            name={this.state.country.name}
            nativeName={this.state.country.nativeName}
            altSpellings={this.state.country.altSpellings}
            languages={this.state.country.languages}
            demonym={this.state.country.demonym}
            topLevelDomain={this.state.country.topLevelDomain}
          />

          <GeographyTable
            region={this.state.country.region}
            subregion={this.state.country.subregion}
            capital={this.state.country.capital}
            population={this.state.country.population}
            area={this.state.country.area}
            borders={this.state.country.borders}
          />

        </div>
      </div>
    );
  }
}

export default CountryDetail;