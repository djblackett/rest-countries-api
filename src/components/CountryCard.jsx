import React from "react";
import styled from "styled-components";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 10px;
  overflow: hidden;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  filter: drop-shadow(3px 3px 3px black);
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
        <CountryName>{country.name}</CountryName>
        <InfoEntry>
          <InfoSpan>Population: </InfoSpan>
          <InfoText>{numberWithCommas(country.population)}</InfoText>
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
