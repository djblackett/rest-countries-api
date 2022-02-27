import "./App.css";
import React, {useState} from 'react';
import CountryCard from "./components/CountryCard";
import CountryCardDetails from "./components/CountryCardDetails";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes"




function App() {

const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}




  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
      <div className="App">
      <button onClick={themeToggler}>Switch Theme</button>
        // country cards in a grid -- make a country card component and a redux
        slice to control the information flow
        <CountryCard />
        <CountryCardDetails/>
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;




