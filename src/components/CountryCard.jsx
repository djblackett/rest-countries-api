import React from "react";
import styled from "styled-components";
import CardInfoEntry from "./CardInfoEntry";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 10px;
  overflow: hidden;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  filter: drop-shadow(3px 3px 3px ${({ theme }) => theme.shadow});
  height: 375px;
`;

const Image = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: calc(5 / 3);
  border: none;
  outline: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-height: 1200px) {
    width: 300px;
  }
`;

const CardInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const CountryName = styled.h1`
  margin-bottom: 20px;
  margin-left: 5px;
  font-size: 1.4em;
`;

function CountryCard(props) {
  const country = props.country;

  const imgStyle = {
    width: "101%",
    height: "100%",
    border: "none",
    outline: "none",
    borderImageWidth: "0",
  };

  return (
    <CardContainer>
      <Image>
        <img
          src={country.flags.png}
          style={imgStyle}
          alt={country.name}
          loading="lazy"
        />
      </Image>
      <CardInfoWrapper>
        <CountryName>{country.name}</CountryName>
        <CardInfoEntry
          text="Population: "
          value={numberWithCommas(country.population)}
          leftMargin={"5px"}
        />
        <CardInfoEntry
          text="Region: "
          value={country.region}
          leftMargin={"5px"}
        />
        <CardInfoEntry
          text="Capital: "
          value={country.capital}
          leftMargin={"5px"}
        />
      </CardInfoWrapper>
    </CardContainer>
  );
}

export default CountryCard;
