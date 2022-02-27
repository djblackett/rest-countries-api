import React from "react";
import styled from "styled-components";
import { country } from "./restSampleData";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: ${({ theme }) => theme.background};
`;

const Image = styled.img`
  src: url({country.flags[1]});
  width: 250px;
  aspect-ratio: calc(16 / 9);
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

function CountryCard() {
  return (
    <CardContainer>
      <Image></Image>
      <CardInfoWrapper>
        <CountryName>{country.name}</CountryName>
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
