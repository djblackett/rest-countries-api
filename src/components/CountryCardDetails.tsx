import React, { useEffect, useState, useCallback, Suspense } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../features/app/hooks";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCountries,
  selectCountries,
  selectIsFulfilled,
} from "../features/countries/countriesSlice";
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

import CardInfoEntry from "./CardInfoEntry";
import { NoMatch } from "./NoMatch";
import { CircleLoader } from "react-spinners";
import IonIcon from "@reacticons/ionicons";
import BorderCountries from "./BorderCountries";
// const BorderCountries = React.lazy(() => import("./BorderCountries"));

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
}

export interface Country {
  name: string;
  nativeName: string;
  numericCode: number;
  languages: string[];
  currencies: { name: string };
  population: number;
  topLevelDomain: string[];
  flags: { png: string };
  region: string;
  subregion: string;
  capital: string;
  borders?: string[];
}

const CountryCardDetails = React.memo(() => {
  const navigate = useNavigate();
  const { id } = useParams();
  const countries = useSelector(selectCountries);
  const [country, setCountry] = useState<Country | undefined | null>(null);
  const dispatch = useAppDispatch();
  const isFinishedLoading = useSelector(selectIsFulfilled);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  function getCountryByName(id: string | undefined): Country | undefined {
    // changes dashes to spaces
    let nameWithSpaces: string;

    if (id) {
      nameWithSpaces = id.replaceAll(/-/g, " ");
    }

    const result = countries.find(
      (country: Country) =>
        country.name.toLowerCase() === nameWithSpaces.toLowerCase()
    );

    setIsLoading(false);
    return result;
  }

  useEffect(() => {
    if (!countries) {
      dispatch(getCountries());
    }

    const timer = setTimeout(() => {
      if (!country) {
        setError(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setCountry(getCountryByName(id));
  }, [id, isFinishedLoading, countries]);

  function onDismiss() {
    navigate(-1);
  }

  // passed to BorderCountries to view border country when clicked
  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const text: string | null = (e.currentTarget as Element).textContent;
    console.log("handleClick text content -> " + text);
    navigate(`/${text?.replaceAll(/ /g, "-")}`);
  }, []);

  const imgStyles = {
    height: "100%",
    width: "100%",
    display: "block",
    src: "url(${country.flags.png}) no-repeat",
  };

  return (
    <Container>
      <BackButton onClick={onDismiss}>
        <IonIcon name="arrow-back-outline"></IonIcon>
        <p>Back</p>
      </BackButton>

      <CircleLoader loading={isLoading} size={200} />

      {!country && error && <NoMatch />}

      {country && (
        <>
          <Image>
            <img
              style={imgStyles}
              src={country.flags.png}
              alt={country.name}
              loading="lazy"
            />
          </Image>

          <InfoContainer>
            <Header>{country.name}</Header>

            <InfoPane>
              <CardInfoEntry
                text={"Native Name: "}
                value={country.nativeName}
              />
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
                value={
                  country.currencies
                    ? Object.values(country.currencies)
                        .map((x: any) => x.name)
                        .join(",")
                    : ""
                }
              />
              <CardInfoEntry
                text={"Languages: "}
                value={country.languages
                  .map((language: any) => language.name)
                  .join(", ")}
              />
            </InfoPane>
            <Footer>
              <BorderSpan>Border Countries: </BorderSpan>

              <BorderCountries country={country} handleClick={handleClick} />
            </Footer>
          </InfoContainer>
        </>
      )}
    </Container>
  );
});

export default CountryCardDetails;
