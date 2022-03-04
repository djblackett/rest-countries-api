import React, { useState } from "react";
import styled from "styled-components";
import { countries } from "./countries";
import { useSelector } from "react-redux";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Dialog } from "@reach/dialog";
import { string } from "prop-types";
import { selectCountries } from "../countriesSlice";
// import { getCountryByName, getCountryNameByCca3 } from "../App";

const Container = styled.div`
  display: grid;
  grid-template: 200px 1fr / 1fr 1fr;
  background-color: ${({ theme }) => theme.body};
  font-size: 16px;
`;

const Image = styled.div`
  height: 320px;
  width: 640px;
  display: block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

const InfoContainer = styled.section`
  display: grid;
  grid-template: 50px 200px 50px/ 1fr 1fr;
  height: 300px;
  width: 500px;
`;

const Header = styled.h1`
  grid-area: 1 / 1 / 2 / 3;
  align-self: center;
  padding: 10px;
`;

const InfoPane = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const InfoSpan = styled.span`
  font-weight: bold;
`;

const InfoText = styled.p`
  font: 16px;
  margin-left: 0.3em;
`;

const InfoEntry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 250px;
  height: 20px;
  margin: 5px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-area: 3 / 1 / 4 / 3;
  padding: 10px;
`;

const BorderCountry = styled.p`
  background-color: ${({ theme }) => theme.background};
  width: 50px;
  margin-left: 5px;
  text-align: center;
  touch-action: none;
`;

const BorderCountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const BackButton = styled.button`
  width: 100px;
  height: 75px;
  grid-area: 1 / 1 / 2 / 3;
`;

function CountryCardDetails(props) {
  let navigate = useNavigate();
  let { id } = useParams();
  let buttonRef = React.useRef < HTMLButtonElement > null;
  const countries = useSelector(selectCountries);
  console.log(id);

  function getCountryByName(id) {
    return countries.find((country) => country.name === id);
  }

  // const [country, setCountry] = useState(props.getCountryByName(id));

  let country = getCountryByName(id);
  console.log(country);

  function onDismiss() {
    navigate(-1);
  }

  function handleClick(e) {
    console.log(e);
    console.log(e.target);
    let text = e.target.textContent;
    console.log(text);
    let countryName = props.getCountryNameByCioc(text);
    console.log(countryName);
    navigate(`/${countryName}`);
  }

  const imgStyles = {
    height: "320px",
    width: "640px",
    display: "block",
    boxSizing: "border-box",
    src: "url(${country.flags.png}) no-repeat",
  };

  if (country) {
    return (
      <Dialog
        aria-labelledby="label"
        onDismiss={onDismiss}
        initialFocusRef={buttonRef}
        style={{ width: "100vw", height: "100vh" }}
      >
        <Container>
          <BackButton onClick={onDismiss}>Back</BackButton>
          <Image>
            <img style={imgStyles} src={country.flags.png} />
          </Image>
          <InfoContainer>
            <Header>{country.name.common}</Header>
            <InfoPane>
              <InfoEntry>
                <InfoSpan>Native Name: </InfoSpan>
                <InfoText>{country.nativeName}</InfoText>
              </InfoEntry>
              <InfoEntry>
                <InfoSpan>Population: </InfoSpan>
                <InfoText>{country.population}</InfoText>
              </InfoEntry>
              <InfoEntry>
                <InfoSpan>Region: </InfoSpan>
                <InfoText>{country.region}</InfoText>
              </InfoEntry>
              <InfoEntry>
                <InfoSpan>Sub Region: </InfoSpan>
                <InfoText>{country.subregion}</InfoText>
              </InfoEntry>
              <InfoEntry>
                <InfoSpan>Capital: </InfoSpan>
                <InfoText>{country.capital}</InfoText>
              </InfoEntry>
            </InfoPane>
            <InfoPane>
              <InfoEntry>
                <InfoSpan>Top Level Domain: </InfoSpan>
                <InfoText>{country.tld}</InfoText>
              </InfoEntry>
              <InfoEntry>
                <InfoSpan>Currencies: </InfoSpan>
                <InfoText>
                  {Object.values(country.currencies)
                    .map((x) => x.name)
                    .join(",")}
                </InfoText>
              </InfoEntry>
              <InfoEntry>
                <InfoSpan>Languages: </InfoSpan>
                <InfoText>
                  {Object.values(country.languages).join(",")}
                </InfoText>
              </InfoEntry>
            </InfoPane>
            <Footer>
              <InfoSpan>Border Countries: </InfoSpan>
              <BorderCountries country={country} handleClick={handleClick} />
            </Footer>
          </InfoContainer>
        </Container>
      </Dialog>
    );
  } else {
    return <h1>Cannot find particular country</h1>;
  }
}

export default CountryCardDetails;

function BorderCountries(props) {
  return (
    <BorderCountryContainer>
      {props.country.borders &&
        props.country.borders.map((x) => {
          return (
            <BorderCountry key={"border-" + x} onClick={props.handleClick}>
              {x}
            </BorderCountry>
          );
        })}
    </BorderCountryContainer>
  );
}
