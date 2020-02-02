import React from "react";


function CountryListItem(props) {
    return (
        <div>
            <img src={props.flag} alt={`flag of ${props.name}`}/>
            <h3>{props.name}</h3>
        </div>
    );
}

export default CountryListItem;