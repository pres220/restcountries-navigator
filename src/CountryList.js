import React from "react";
import CountryListItem from "./CountryListItem";

class CountryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currData: this.props.countryData
    };
  }

  render() {
    const countryList = this.props.countryData.map(country => {console.log(country.area); return (
      <CountryListItem
        key={country.numericCode}
        name={country.name}
        flag={country.flag}
        population={country.population}
        area={country.area}
      />
    )});

    return <ul className="country-list">{countryList}</ul>;
  }
}

export default CountryList;
