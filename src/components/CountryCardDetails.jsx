import React from "react";
import styled from "styled-components";
// import { country } from "./restSampleData";
import { countries } from "./countries";

const country = countries[0];

const Container = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  background-color: ${({ theme }) => theme.body};
  font-size: 16px;
`;

const Image = styled.img`
  /* src: url(${country.flags.png}); */
  height: 320px;
  width: 640px;
  display: block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: url(${country.flags.svg}) no-repeat;
  /* padding-left: 500px; Equal to width of new image */
`;

const InfoContainer = styled.section`
  display: grid;
  grid-template: 50px 200px 50px/ 1fr 1fr;
  height: 300px;
  width: 500px;
  /* align-items: center; */
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
`;

const BorderCountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

function CountryCardDetails() {
  return (
    <Container>
      <Image />
      <InfoContainer>
        <Header>{country.name.common}</Header>
        <InfoPane>
          <InfoEntry>
            <InfoSpan>Native Name: </InfoSpan>
            <InfoText>
              {Object.values(country.name.nativeName)[0].common}
            </InfoText>
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
            <InfoText>{country.tld[0]}</InfoText>
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
            <InfoText>{Object.values(country.languages).join(",")}</InfoText>
          </InfoEntry>
        </InfoPane>
        <Footer>
          <InfoSpan>Border Countries: </InfoSpan>
          <BorderCountryContainer>
            {country.borders.map((x) => {
              return <BorderCountry key={"border-" + x}> {x} </BorderCountry>;
            })}
          </BorderCountryContainer>
        </Footer>
      </InfoContainer>
    </Container>
  );
}

export default CountryCardDetails;
