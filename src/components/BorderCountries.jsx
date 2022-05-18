import React from "react";
import {
  BorderCountryContainer,
  BorderCountry,
} from "../css/BorderCountriesStyle";
import { useSelector } from "react-redux";
import { selectIsFulfilled } from "../features/countries/countriesSlice";
import { countryMap } from "../data/countryMap";

export function BorderCountries(props) {
  const isFulfilled = useSelector(selectIsFulfilled);

  if (isFulfilled) {
    return (
      <BorderCountryContainer>
        {props.country.borders &&
          props.country.borders.map((x) => {
            return (
              <BorderCountry key={"border-" + x} onClick={props.handleClick}>
                {countryMap[x]}
              </BorderCountry>
            );
          })}
      </BorderCountryContainer>
    );
  } else {
    return <h1>Loading Border Countries</h1>;
  }
}
