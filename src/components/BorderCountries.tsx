import React from "react";
import {
  BorderCountryContainer,
  BorderCountry,
} from "../css/BorderCountriesStyle";
import { useSelector } from "react-redux";
import { selectIsFulfilled } from "../features/countries/countriesSlice";
import { countryMap } from "../data/countryMap";
import { Country } from "./CountryCardDetails";

interface Props {
  country: Country;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}

function BorderCountries(props: Props) {
  const isFulfilled = useSelector(selectIsFulfilled);

  if (isFulfilled) {
    return (
      <BorderCountryContainer>
        {props.country.borders &&
          props.country.borders.map((x: any) => {
            return (
              <BorderCountry
                key={"border-" + countryMap[x]}
                onClick={props.handleClick}
              >
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

export default BorderCountries;
