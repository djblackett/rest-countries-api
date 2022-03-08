import styled from "styled-components";

export const Container = styled.div`
  /* margin-top: 70px;
  margin-left: 50px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  grid-template: 150px 300px / 1fr;
  background-color: ${({ theme }) => theme.body};
  font-size: 16px;

  @media (min-width: 1200px) {
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
    grid-template: 150px 300px / 35% 50%;
    margin-top: 100px;
    margin-left: 50px;
  }
`;

export const BackButton = styled.button`
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 5%;
  width: 100px;
  height: 45px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-self: flex-start;

  background-color: ${({ theme }) => theme.background};
  filter: drop-shadow(2px 2px 2px black);
  border-radius: 6px;
  color: ${({ theme }) => theme.text};

  @media (min-width: 1200px) {
    margin-bottom: 0;
    grid-area: 1 / 1 / 2 / 3;
    align-self: normal;
    margin-left: 0;
  }
`;

export const Image = styled.div`
  height: auto;
  width: 90%;
  aspect-ratio: calc(5 / 3);
  display: block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  filter: drop-shadow(2px 2px 2px black);

  @media (min-width: 1200px) {
    height: 300px;
    width: 500px;
  }
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 90%;

  @media (min-width: 1200px) {
    display: grid;
    grid-template: 50px 200px 50px/ 40% 60%;
    margin-left: 50px;
    height: 300px;
    width: 700px;
  }
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
  align-items: flex-start;
  height: 100%;
`;

export const BorderSpan = styled.div`
  width: 200px;
  font-weight: bold;
  padding-top: 10px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;

  @media (min-width: 1200px) {
    grid-area: 3 / 1 / 4 / 3;
  }
`;
