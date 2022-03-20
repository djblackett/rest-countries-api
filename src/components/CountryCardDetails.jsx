import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectCountries } from "../countriesSlice";
import {
  Container,
  Image,
  InfoContainer,
  Header,
  InfoPane,
  Footer,
  BackButton,
  BorderSpan,
} from "../css/CountryCardDetailsStyles";
import { BorderCountries } from "./BorderCountries";
import CardInfoEntry from "./CardInfoEntry";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
}

function CountryCardDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const countries = useSelector(selectCountries);
  const [country, setCountry] = useState(null);

  function getCountryByName(id) {
    console.log(id);
    // changes dashes to spaces
    let nameWithSpaces = id.replaceAll(/-/g, " ");
    let c = countries.find((country) => country.name === nameWithSpaces);
    console.log(c);
    return c;
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
    navigate(`/${text.replaceAll(/ /g, "-")}`);
  }

  const imgStyles = {
    height: "100%",
    width: "100%",
    display: "block",
    boxSizing: "border-box",
    src: "url(${country.flags.png}) no-repeat",
  };

  if (country) {
    return (
      <Container>
        <BackButton onClick={onDismiss}>
          <ion-icon name="arrow-back-outline"></ion-icon>
          <p>Back</p>
        </BackButton>
        <Image>
          <img style={imgStyles} src={country.flags.png} alt={country.name} />
        </Image>

        <InfoContainer>
          <Header>{country.name}</Header>

          <InfoPane>
            <CardInfoEntry text={"Native Name: "} value={country.nativeName} />
            <CardInfoEntry
              text={"Population: "}
              value={numberWithCommas(country.population)}
            />
            <CardInfoEntry text={"Region: "} value={country.region} />
            <CardInfoEntry text={"Sub Region: "} value={country.subregion} />
            <CardInfoEntry text={"Capital: "} value={country.capital} />
          </InfoPane>
          <InfoPane>
            <CardInfoEntry
              text={"Top Level Domain: "}
              value={country.topLevelDomain[0]}
            />
            <CardInfoEntry
              text={"Currencies: "}
              value={Object.values(country.currencies)
                .map((x) => x.name)
                .join(",")}
            />
            <CardInfoEntry
              text={"Languages: "}
              value={country.languages
                .map((language) => language.name)
                .join(", ")}
            />
          </InfoPane>
          <Footer>
            <BorderSpan>Border Countries: </BorderSpan>
            <BorderCountries country={country} handleClick={handleClick} />
          </Footer>
        </InfoContainer>
      </Container>
    );
  } else {
    return <h1>Cannot find particular country</h1>;
  }
}

export default CountryCardDetails;
