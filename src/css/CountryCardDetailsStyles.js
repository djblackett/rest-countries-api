import styled from "styled-components";

export const Container = styled.div`
  margin-top: 70px;
  margin-left: 50px;
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  grid-template: 150px 300px / 35% 50%;
  background-color: ${({ theme }) => theme.body};
  font-size: 16px;
`;

export const BackButton = styled.button`
  margin-top: 25px;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-area: 1 / 1 / 2 / 3;
  background-color: ${({ theme }) => theme.background};
  filter: drop-shadow(2px 2px 2px black);
  border-radius: 6px;
  color: ${({ theme }) => theme.text};
`;

export const Image = styled.div`
  height: 300px;
  width: 500px;
  display: block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  filter: drop-shadow(2px 2px 2px black);
`;

export const InfoContainer = styled.section`
  display: grid;
  grid-template: 50px 200px 50px/ 1fr 1fr;
  height: 300px;
  width: 700px;

  @media (min-width: 1200px) {
    margin-left: 50px;
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
`;

export const InfoSpan = styled.span`
  font-weight: bold;
`;

export const BorderSpan = styled.div`
  width: 200px;
  font-weight: bold;
  /* align-self: flex-start;
  justify-self: flex-start; */
  padding-top: 10px;
`;

export const InfoText = styled.p`
  font: 14px;
  margin-left: 0.3em;
`;

export const InfoEntry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: flex-start; */
  width: 100%;
  height: 20px;
  margin: 5px 0;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  grid-area: 3 / 1 / 4 / 3;
  padding: 10px;
  /* margin-left: 10px; */
  /* justify-content: center; */
  /* justify-items: center; */
`;
