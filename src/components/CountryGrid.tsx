import React from "react";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import {
  selectCountries,
  selectFetchingError,
  selectIsFetching,
} from "../countriesSlice";
import { CountryGridContainer } from "../css/AppStyles";

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
    <CountryGridContainer>
      {countries
        .filter((country: any) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = country.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        .map((country: any, index: number) => {
          return (
            <Link
              key={index}
              to={`/${country.name}`}
              style={{ textDecoration: "none" }}
              // This is the trick! Set the `backgroundLocation` in location state
              // so that when we open the modal we still see the current page in
              // the background.
              state={{ backgroundLocation: location }}
            >
              <CountryCard country={country} key={country.numericCode} />
            </Link>
          );
        })}
    </CountryGridContainer>
  );
}
