import "./App.css";
import React, {useState} from 'react';
import CountryCard from "./components/CountryCard";
import CountryCardDetails from "./components/CountryCardDetails";
import styled, {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import {countries} from './components/countries';



const magnifyingGlass = <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Search</title><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/><div xmlns=""/></svg>;

const CountryGrid = styled.div`
  margin: 50px;
  display: grid;
  
  gap: 50px;
  /* padding: 25px; */
  justify-items: center;
  justify-content: center;
  
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

const Header = styled.nav`
  width: 100%;
  min-height: 50px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: ${({theme}) => theme.text };
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 150px;

`;

const InputContainer = styled.div`
  background: ${({theme}) => theme.background};
  height: 70px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Search for a country',
})`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({theme}) => theme.text};
`

const SearchFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px;
`

const moon = <svg width="50px" height="auto" xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 100 100"><title>Moon</title>
             <path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"/><div xmlns=""/></svg>
const countryList = countries.slice(0, 12);


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
      <Header ><p>Where in the world?</p><Button onClick={themeToggler}><ion-icon name="moon-outline"></ion-icon><p>Dark Mode</p></Button></Header>
      <SearchFilterContainer>
      <InputContainer>{magnifyingGlass}<Input /></InputContainer>
      </SearchFilterContainer>
      <CountryGrid>
        {countryList.map(country => <CountryCard country={country} key={country.name.common} /> )}
  
        </CountryGrid>
        <CountryCardDetails/>
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;




