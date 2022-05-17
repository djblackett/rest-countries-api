import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountryCardDetails from "./components/CountryCardDetails";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

import CountriesHeader from "./components/CountriesHeader";
import { Outlet, useLocation, Routes, Route } from "react-router-dom";
import "@reach/dialog/styles.css";
import {
  getCountries,
  createMap,
  selectIsFulfilled,
} from "./features/countries/countriesSlice";
import { selectColorMode } from "./features/colorMode/colorModeSlice";
import { CountryGrid } from "./components/CountryGrid";
import { NoMatch } from "./NoMatch";
import type { RouteObject } from "react-router-dom";
import { Link, useRoutes, useParams } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  let location = useLocation();

  const isFinishedLoading = useSelector(selectIsFulfilled);
  const theme = useSelector(selectColorMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <CountryGrid />,
        },

        {
          path: ":id",
          element: <CountryCardDetails />,
        },
        // { path: "*", element: <NoMatch /> },
      ],
    },
  ];

  let element = useRoutes(routes);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <div className="App">
        <CountriesHeader />
        {element}
      </div>
    </ThemeProvider>
  );
}

export default App;
