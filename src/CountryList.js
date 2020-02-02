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
        const countryList = this.props.countryData.map(country => (
            <CountryListItem
                key={country.numericCode}
                name={country.name}
                flag={country.flag}
            />
        ));

        console.log("this.state.currData", this.state.currData);
        console.log("this.props.countryData", this.props.countryData);

        return (
            <div>
                {countryList}
            </div>
        );
    }
}

export default CountryList;