import styled from "styled-components";

export const Container = styled.div`
  /* margin-top: 70px;
  margin-left: 50px; */
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  /* grid-template: 150px 300px / 1fr; */
  background-color: ${({ theme }) => theme.body};
  font-size: 16px;

  @media (min-width: 900px) {
    /* align-items: flex-start; */
    max-width: 900px;
  }

  @media (min-width: 1400px) {
    max-width: 100%;
    display: grid;
    /* justify-content: center; */
    /* align-content: center; */
    align-items: start;
    grid-template: 200px 300px / 35% 50%;
    margin-top: 50px;
    /* margin-left: 50px; */
    margin-left: 1%;
    margin-right: 1%;
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
  filter: drop-shadow(2px 2px 2px ${({ theme }) => theme.shadow});
  border-radius: 6px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  border: none;

  @media (min-width: 600px) {
    margin-top: 100px;
    margin-left: 50px;
  }

  @media (min-width: 1400px) {
    /* margin-bottom: 0; */
    grid-area: 1 / 1 / 2 / 3;
    align-self: start;
    justify-self: start;
    margin-left: 0;
  }
`;

export const Image = styled.div`
  height: auto;
  width: 90%;
  max-width: 500px;
  aspect-ratio: calc(5 / 3);
  display: block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  filter: drop-shadow(2px 2px 2px ${({ theme }) => theme.shadow});

  @media (min-width: 600px) {
    align-self: flex-start;
    margin-left: 50px;
  }

  @media (min-width: 1400px) {
    height: 300px;
    width: 500px;
    margin-left: 0;
  }
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 90%;

  @media (min-width: 900px) {
    display: grid;
    grid-template: 100px 200px 50px/ 40% 60%;
    /* margin-left: 50px; */
    /* height: 300px; */
    /* width: 700px; */
  }

  @media (min-width: 1400px) {
    display: grid;
    grid-template: 50px 150px 50px/ 40% 60%;
    margin-left: 50px;
    /* height: 300px; */
    width: 100%;
  }
`;

export const Header = styled.h1`
  grid-area: 1 / 1 / 2 / 3;
  align-self: start;
  padding: 10px;
  margin-bottom: 20px;

  @media (min-width: 1400px) {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
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
  width: 100%;

  /* @media (min-width: 900px) {
  } */

  @media (min-width: 900px) {
    grid-area: 3 / 1 / 4 / 3;
  }
`;
