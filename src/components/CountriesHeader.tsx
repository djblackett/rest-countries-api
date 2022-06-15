import React, { useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleColorMode } from "../features/colorMode/colorModeSlice";
import IonIcon from "@reacticons/ionicons";
import { clearFilters } from "../features/filters/filtersSlice";
import { selectColorMode } from "../features/colorMode/colorModeSlice";

const Header = styled.nav`
  width: inherit;
  height: 80px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
  box-sizing: border-box;

  color: ${({ theme }) => theme.text};
  filter: drop-shadow(3px 3px 3px ${({ theme }) => theme.shadow});
  z-index: 15;

  @media (min-width: 600px) {
    min-height: 50px;
    max-height: 60px;
    position: fixed;
    margin-bottom: 60px;
  }
`;

const Home = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.background};
  /* height: 100%; */
  margin: 0;
  padding: 0;
`;

const Button = styled.div.attrs({
  tabIndex: 0,
})`
  background-color: ${({ theme }) => theme.background};
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  height: 100%;
  cursor: pointer;
  &:hover {
    filter: brightness(75%) saturate(120%);
  }
`;

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  &:hover {
    filter: brightness(75%) saturate(120%);
  }
`;

// Home button and color mode button
const CountriesHeader = React.memo(() => {
  const dispatch = useDispatch();
  const colorMode = useSelector(selectColorMode);

  const themeTogglerEnter = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.charCode === 13 || e.keyCode === 13) {
        dispatch(toggleColorMode);
      }
    },
    []
  );

  return (
    <Header>
      <HomeContainer>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
          onClick={() => dispatch(clearFilters())}
        >
          <Home>Where in the world?</Home>
        </Link>
      </HomeContainer>
      <Button
        onClick={() => dispatch(toggleColorMode())}
        onKeyPress={(e) => themeTogglerEnter(e)}
      >
        <IonIcon name="moon-outline"></IonIcon>
        <p>{colorMode === "light" ? "Dark" : "Light"} Mode</p>
      </Button>
    </Header>
  );
});

export default CountriesHeader;
