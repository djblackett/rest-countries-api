import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Dialog } from "@reach/dialog";
import { selectCountries } from "../countriesSlice";
import {
  Container,
  Image,
  InfoContainer,
  Header,
  InfoPane,
  InfoSpan,
  InfoText,
  InfoEntry,
  Footer,
  BackButton,
} from "../css/CountryCardDetailsStyles";
import { BorderCountries } from "./BorderCountries";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function CountryCardDetails(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  let buttonRef = React.useRef < HTMLButtonElement > null;
  const countries = useSelector(selectCountries);
  console.log(id);
  // console.log(countries);

  const [country, setCountry] = useState(null);

  function getCountryByName(id) {
    console.log(id);
    let c = countries.find((country) => country.name === id);
    console.log(c);
    return c;
  }

  function getCountryNameByCioc(text) {
    console.log(text);
    let c = countries.find((country) => country.alpha3Code === text);
    if (c) {
      return c.name;
    }
  }

  useEffect(() => {
    setCountry(getCountryByName(id));
  }, [id]);

  function onDismiss() {
    navigate(-1);
  }

  function handleClick(e) {
    let text = e.target.textContent;
    console.log("handleClick text content -> " + text);
    // let countryName = getCountryNameByCioc(text);
    // let countryName = getCountryByName(text);
    navigate(`/${text}`);
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
      // <Dialog
      //   aria-labelledby="label"
      //   onDismiss={onDismiss}
      //   initialFocusRef={buttonRef}
      //   style={{ width: "100vw", height: "100vh" }}
      // >
      <Container>
        <BackButton onClick={onDismiss}>Back</BackButton>
        <Image>
          <img style={imgStyles} src={country.flags.png} />
        </Image>
        <InfoContainer>
          <Header>{country.name}</Header>
          <InfoPane>
            <InfoEntry>
              <InfoSpan>Native Name: </InfoSpan>
              <InfoText>{country.nativeName}</InfoText>
            </InfoEntry>
            <InfoEntry>
              <InfoSpan>Population: </InfoSpan>
              <InfoText>{numberWithCommas(country.population)}</InfoText>
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
                {country.languages.map((language) => language.name).join(", ")}
              </InfoText>
            </InfoEntry>
          </InfoPane>
          <Footer>
            <InfoSpan>Border Countries: </InfoSpan>
            <BorderCountries country={country} handleClick={handleClick} />
          </Footer>
        </InfoContainer>
      </Container>
      // </Dialog>
    );
  } else {
    return <h1>Cannot find particular country</h1>;
  }
}

export default CountryCardDetails;
