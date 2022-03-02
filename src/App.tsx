import "./App.css";
import React, { useState } from "react";
import CountryCard from "./components/CountryCard";
import CountryCardDetails from "./components/CountryCardDetails";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { countries } from "./components/countries";
import CountriesHeader from "./components/CountriesHeader";
import {
  Outlet,
  Link,
  useLocation,
  useNavigate,
  useParams,
  Routes,
  Route,
} from "react-router-dom";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

export function getCountryByName(id: string) {
  return countryList.find((country) => country.name.common === id);
}

const magnifyingGlass = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
  >
    <title>Search</title>
    <path
      d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M338.29 338.29L448 448"
    />
    <div />
  </svg>
);

const CountryGridContainer = styled.div`
  margin: 50px;
  display: grid;

  gap: 50px;
  /* padding: 25px; */
  justify-items: center;
  justify-content: center;
  text-decoration: none;

  @media (min-width: 600px) {
    grid-template: repeat(3, 1fr) / repeat(2, 250px);
  }
  @media (min-width: 900px) {
    grid-template: repeat(3, 1fr) / repeat(3, 250px);
  }
  @media (min-width: 1200px) {
    grid-template: repeat(3, 1fr) / repeat(4, 250px);
  }
`;

const InputContainer = styled.div`
  background: ${({ theme }) => theme.background};
  height: 70px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input.attrs({
  type: "text",
  placeholder: "Search for a country",
})`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const SearchFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px;
`;

const countryList = countries.slice(0, 12);

function App() {
  let location = useLocation();

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  let state = location.state as { backgroundLocation?: Location };

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <CountriesHeader themeToggler={themeToggler} />
        <SearchFilterContainer>
          <InputContainer>
            {magnifyingGlass}
            <Input />
          </InputContainer>
        </SearchFilterContainer>

        {/* <CountryGrid></CountryGrid> */}

        <Routes location={state?.backgroundLocation || location}>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<CountryGrid />}>
            {/* </Route> */}
            <Route path="/:id" element={<DetailsView />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>

        {/* Show the modal when a `backgroundLocation` is set */}
        {state?.backgroundLocation && (
          <Routes>
            <Route path="/:id" element={<CountryCardDetails />} />
          </Routes>
        )}
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export function CountryGrid() {
  let location = useLocation();
  return (
    <CountryGridContainer>
      {countryList.map((country) => {
        return (
          <Link
            key={country.name.common}
            to={`/${country.name.common}`}
            style={{ textDecoration: "none" }}
            // This is the trick! Set the `backgroundLocation` in location state
            // so that when we open the modal we still see the current page in
            // the background.
            state={{ backgroundLocation: location }}
          >
            <CountryCard country={country} key={country.name.common} />
          </Link>
        );
      })}
    </CountryGridContainer>
  );
}

export function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export function DetailsView() {
  let { id } = useParams<"id">();
  let countryDetail = null;

  if (id) {
    countryDetail = getCountryByName(id);
  }
  if (!countryDetail) return <div>Country not found</div>;

  return <CountryCardDetails country={countryDetail} />;
}

export default App;
