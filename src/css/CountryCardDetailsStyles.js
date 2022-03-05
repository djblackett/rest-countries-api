import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  /* justify-items: center; */
  margin-top: 70px;
  margin-left: 50px;
  display: grid;
  grid-template: 100px 1fr / 1fr 1fr;
  background-color: ${({ theme }) => theme.body};
  font-size: 16px;
`;

export const BackButton = styled.button`
  margin-top: 25px;
  width: 100px;
  height: 50px;
  grid-area: 1 / 1 / 2 / 3;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 2px 2px 2px black;
  border-radius: 6px;
  color: ${({ theme }) => theme.text};
`;

export const Image = styled.div`
  height: 300px;
  width: 500px;
  display: block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const InfoContainer = styled.section`
  display: grid;
  grid-template: 50px 200px 50px/ 1fr 1fr;
  height: 300px;
  width: 500px;
`;

export const Header = styled.h1`
  grid-area: 1 / 1 / 2 / 3;
  align-self: center;
  padding: 10px;
`;

export const InfoPane = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const InfoSpan = styled.span`
  font-weight: bold;
`;

export const InfoText = styled.p`
  font: 16px;
  margin-left: 0.3em;
`;

export const InfoEntry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 250px;
  height: 20px;
  margin: 5px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-area: 3 / 1 / 4 / 3;
  padding: 10px;
  /* margin-left: 10px; */
  justify-content: center;
  justify-items: center;
`;

export const BorderCountry = styled.p`
  background-color: ${({ theme }) => theme.background};
  width: 50px;
  margin-left: 5px;
  text-align: center;
  touch-action: none;
`;

export const BorderCountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
