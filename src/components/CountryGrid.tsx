import React from "react";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";
import { Link, useSearchParams } from "react-router-dom";
import {
  selectCountries,
  selectFetchingError,
  selectIsFetching,
} from "../features/countries/countriesSlice";
import { CountryGridContainer } from "../css/CountryGridStyles";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";

// interface Country {
//   name: string;
//   nativeName: string;
//   numericCode: number;
//   languages: string[];
//   currencies: string[];
//   population: number;
//   topLevelDomain: string[];
//   flags: string[];
// }

export function CountryGrid() {
  const [searchParams, setSearchParams] = useSearchParams();
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
      <SearchBar />
      <DropDown />

      {countries
        .filter((country) => {
          const filter = searchParams.get("filter");
          if (!filter) return true;
          const name = country.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })

        .filter((country) => {
          const region = searchParams.get("region");
          if (!region || region === "All") return true;
          const regionName = country.region;
          return region === regionName;
        })

        .map((country, index: number) => {
          return (
            <Link
              key={index}
              to={`/${country.name.replaceAll(/ /g, "-")}`}
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CountryCard country={country} key={country.numericCode} />
            </Link>
          );
        })}
    </CountryGridContainer>
  );
}
