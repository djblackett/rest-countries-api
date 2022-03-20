import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  filter: drop-shadow(3px 3px 3px black);
  z-index: 5;

  @media (min-width: 600px) {
    min-height: 50px;
    max-height: 60px;
    position: fixed;
  }
`;

const Home = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
`;

const Button = styled.div.attrs({
  tabIndex: "0",
})`
  background: transparent;
  border: none;
  /* outline: none; */
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  cursor: pointer;
`;

function CountriesHeader(props) {
  return (
    <Header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Home>Where in the world?</Home>
      </Link>
      <Button onClick={props.themeToggler} onKeyPress={props.onEnter}>
        <ion-icon name="moon-outline"></ion-icon>
        <p>Dark Mode</p>
      </Button>
    </Header>
  );
}

export default CountriesHeader;
