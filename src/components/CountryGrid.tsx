import React from "react";
import { useSelector } from "react-redux";
import IonIcon from "@reacticons/ionicons";
import CountryCard from "./CountryCard";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import {
  selectCountries,
  selectFetchingError,
  selectIsFetching,
} from "../countriesSlice";
import {
  CountryGridContainer,
  InputContainer,
  Input,
  SearchAndFilter,
} from "../css/CountryGridStyles";
import RegionDropDown from "./RegionDropDown";

export function CountryGrid() {
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  const countries = useSelector(selectCountries);
  const isFetching = useSelector(selectIsFetching);
  const fetchingError = useSelector(selectFetchingError);

  if (isFetching) {
    return <h1>Loading Countries</h1>;
  }

  if (fetchingError) {
    return <h1>Error loading countries from API</h1>;
  }

  if (!countries) {
    return null;
  }

  return (
    <>
      <CountryGridContainer>
        <InputContainer>
          <IonIcon name="search-circle-outline" size="large"></IonIcon>
          <Input
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
        </InputContainer>
        <RegionDropDown />

        {countries
          .filter((country: any) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = country.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })

          .filter((country: any) => {
            let region = searchParams.get("region");
            if (!region) return true;
            let regionName = country.region;
            return region === regionName;
          })

          .map((country: any, index: number) => {
            return (
              <Link
                key={index}
                to={`/${country.name}`}
                style={{ textDecoration: "none" }}
                // I was experiementing with the countries opening up in a modal with the country list still in the background. Hence the commented out code.
                // This is the trick! Set the `backgroundLocation` in location state
                // so that when we open the modal we still see the current page in
                // the background.
                // state={{ backgroundLocation: location }}
              >
                <CountryCard country={country} key={country.numericCode} />
              </Link>
            );
          })}
      </CountryGridContainer>
    </>
  );
}
