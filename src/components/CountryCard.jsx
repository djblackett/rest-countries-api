import React from "react";
import styled from "styled-components";
// import { country } from "./restSampleData";
// import { countries } from "./countries";

// const country = countries[3];

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: ${({ theme }) => theme.background};
  /* background-color: black; */
  /* box-shadow: 2px 2px 2px 2px darkgray; */
  /* filter: drop-shadow(10px 10px 4px #4444dd); */
  border: none;
  border-radius: 10px;
  overflow: hidden;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;

const Image = styled.div`
  width: 250px;
  height: 150px;
  border: none;
  outline: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const CountryName = styled.h1`
  margin-bottom: 10px;
  margin-left: 5px;
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
  width: 200px;
  height: 20px;
  margin: 5px;
`;

function CountryCard(props) {
  const country = props.country;

  const imgStyle = {
    width: "252px",
    height: "152px",
    // aspectRatio: "calc(5/3)",
    border: "none",
    outline: "none",
    borderImageWidth: "0",
  };

  return (
    <CardContainer>
      <Image>
        <img src={country.flags.png} style={imgStyle} />
      </Image>
      <CardInfoWrapper>
        <CountryName>{country.name.common}</CountryName>
        <InfoEntry>
          <InfoSpan>Population: </InfoSpan>
          <InfoText>{country.population}</InfoText>
        </InfoEntry>
        <InfoEntry>
          <InfoSpan>Region: </InfoSpan>
          <InfoText>{country.region}</InfoText>
        </InfoEntry>
        <InfoEntry>
          <InfoSpan>Capital: </InfoSpan>
          <InfoText>{country.capital}</InfoText>
        </InfoEntry>
      </CardInfoWrapper>
    </CardContainer>
  );
}

export default CountryCard;
