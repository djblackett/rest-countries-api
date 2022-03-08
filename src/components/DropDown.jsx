import React, { useState } from "react";
import styled from "styled-components";
import IonIcon from "@reacticons/ionicons";
import { useSearchParams } from "react-router-dom";

const Main = styled("div")`
  align-self: start;
  box-sizing: border-box;
  background: transparent;
  height: 50px;
  z-index: 10;
  grid-area: 2 / 1 / 3 / 2;
  width: 35%;
  cursor: pointer;
  filter: drop-shadow(2px 2px 2px bottom);
  margin: 20px 5%;
  margin-bottom: 30px;

  @media (min-width: 1200px) {
    justify-self: end;
    grid-area: 1 / 3 / 2 / 5;
    margin: 0;
    width: 250px;
  }
  /* position: relative; */
`;

// export const Main = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   align-items: flex-end;
//   grid-area: 2 / 1 / 3 / 2;
//   justify-self: start;
//   align-self: center;
//   text-align: end;
//   font-size: 18px;
//   font-weight: bold;
//   margin: 0 5%;
//   width: 55%;
//   filter: drop-shadow(3px 3px 3px black);
//   max-height: 50px;
//   /* position: sticky; */

//   @media (min-width: 1200px) {
//     grid-area: 1 / 3 / 2 / 5;
//     align-self: flex-start;
//     justify-self: end;
//     margin: 0;
//     width: auto;
//   }
// `;

const DropDownContainer = styled("div")`
  width: 250px;
  margin: 0 auto;
  z-index: 10;
  filter: drop-shadow(2px 2px 2px bottom);
`;

const DropDownHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 50px;
  /* margin-bottom: 0.8em; */
  padding: 20px;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  border-radius: 6px;
  filter: drop-shadow(2px 2px 2px black);
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background-color: ${({ theme }) => theme.background};
  padding-bottom: 5px;
  box-sizing: border-box;
  border-radius: 4px;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  font-weight: 600;

  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [regionState, setRegionState] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (region) => () => {
    setRegionState(region);
    setIsOpen(false);
    if (regionState !== "Filter by Region") {
      setSearchParams({ region });
    } else {
      setSearchParams({});
    }
  };

  // todo make the drop down from scratch so I can style it correctly

  function handleChange(event) {
    if (regionState && regionState !== "Filter by Region") {
      setSearchParams({ regionState });
    } else {
      setSearchParams({});
    }
  }

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {regionState || "Filter by Region"}
          <IonIcon name="chevron-down-outline"></IonIcon>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option, index) => (
                <ListItem onClick={onOptionClicked(option)} key={index}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}
