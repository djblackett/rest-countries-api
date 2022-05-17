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
import { getCountries, createMap, selectIsFulfilled } from "./features/countriesSlice";
import { CountryGrid } from "./components/CountryGrid";
import { NoMatch } from "./NoMatch";
import type { RouteObject } from "react-router-dom";
import { Link, useRoutes, useParams } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  let location = useLocation();
  // const countries = useSelector(selectCountries);
  const isFinishedLoading = useSelector(selectIsFulfilled);

  // let state = location.state as { backgroundLocation?: Location };
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const themeTogglerEnter = (e: any) => {
    if (e.charCode === 13 || e.keyCode === 13) {
      theme === "light" ? setTheme("dark") : setTheme("light");
    }
  };
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    dispatch(createMap());
  }, [isFinishedLoading]);

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
        { path: "*", element: <NoMatch /> },
      ],
    },
  ];

  let element = useRoutes(routes);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <div className="App">
        <CountriesHeader
          themeToggler={themeToggler}
          onEnter={themeTogglerEnter}
        />

        {element}
        {/* <Outlet /> */}

        {/* <Routes>
          <Route path="countries" element={<CountryGrid />} />
          <Route path=":id" element={<CountryCardDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Outlet /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
