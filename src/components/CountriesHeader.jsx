import React from "react";
import styled from 'styled-components';

const Header = styled.nav`
  width: 100%;
  min-height: 50px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
  box-sizing: border-box;
  position: fixed;
  /* margin-bottom: 100px; */
`;

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 150px;
`;

function CountriesHeader(props) {
  return (
    <Header>
      <p>Where in the world?</p>
      <Button onClick={props.themeToggler}>
        <ion-icon name="moon-outline"></ion-icon>
        <p>Dark Mode</p>
      </Button>
    </Header>
  );
}

export default CountriesHeader;