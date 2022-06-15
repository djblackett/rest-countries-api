import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import  CountryCard  from "./CountryCard";
import { Link, useSearchParams } from "react-router-dom";
import {
  selectCountries,
  selectFetchingError,
  selectIsFetching,
} from "../features/countries/countriesSlice";
import { CountryGridContainer } from "../css/CountryGridStyles";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const GUTTER_SIZE = 50;

const COLUMN_WIDTH = 300;
const ROW_HEIGHT = 375;
let numberOfColumns = 4;
let numberOfGutters = numberOfColumns + 1;

//todo maybe use the new React useTransition or whatever to make a smooth transition from before initial load to after

export function CountryGridWindow() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [filter, setFilter] = useState("");
  const countries = useSelector(selectCountries);
  const isFetching = useSelector(selectIsFetching);
  const fetchingError = useSelector(selectFetchingError);

  const GridContainer = (props) => {
    return (
      <div
        className="centeredGrid"
        style={{ display: "flex", justifyContent: "center" }}
        {...props}
      />
    );
  };

  const filteredCountries = useMemo(() => {
    return countries
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
      });
  });

  if (isFetching) {
    return <h1>Loading Countries</h1>;
  }

  if (fetchingError) {
    return <h1>Error loading countries from API</h1>;
  }

  if (!countries) {
    return null;
  }

  function getArrayIndexFromGridIndices(row, column) {
    return row * 3 + column;
  }

  // useMemo or useCallBack for this
  return (
    <>
      <CountryGridContainer>
        <SearchBar />
        <DropDown />

        <AutoSizer>
          {({ height, width }) => (
            <Grid
              useIsScrolling={true}
              columnCount={4}
              columnWidth={300}
              height={height}
              rowCount={95}
              rowHeight={400}
              width={width}
              style={{ justifyContent: "center", justifySelf: "center" }}
              innerElementType={GridContainer}
            >
              {/* {console.log(filteredCountries)} */}
              {({ columnIndex, rowIndex, style }) => {
                const country =
                  filteredCountries[
                    getArrayIndexFromGridIndices(columnIndex, rowIndex)
                  ];

                // eslint-disable-next-line no-undef
                // console.log(country);
                return (
                  <Link
                    key={country.numericCode + "-link"}
                    to={`/${country.name.replaceAll(/ /g, "-")}`}
                    // style={style}
                    style={{
                      ...style,
                      textDecoration: "none",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // left: style.left + GUTTER_SIZE,
                      // top: style.top + GUTTER_SIZE,
                      width: style.width - GUTTER_SIZE,
                      height: style.height - GUTTER_SIZE,
                    }}
                  >
                    <CountryCard country={country} key={country.numericCode} />
                  </Link>
                );
              }}
            </Grid>
          )}
        </AutoSizer>
      </CountryGridContainer>
    </>
  );
}
// const Cell = ({ columnIndex, rowIndex, style }, children) => (
//   <li style={style}>{children}</li>
// );
