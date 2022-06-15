import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import IonIcon from "@reacticons/ionicons";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../features/app/hooks";
import {
  setFilter,
  setRegion,
  selectFilter,
  selectRegion,
} from "../features/filters/filtersSlice";
import { useSelector } from "react-redux";

const Main = styled("div")`
  align-self: start;
  box-sizing: border-box;
  background: transparent;
  height: 50px;
  z-index: 10;
  grid-area: 2 / 1 / 3 / 2;
  width: 35%;
  cursor: pointer;
  filter: drop-shadow(3px 3px 3px ${({ theme }) => theme.shadow});
  margin: 20px 5%;
  margin-bottom: 30px;

  @media (min-width: 600px) {
    grid-area: 1 / 2 / 2 / 3;
    justify-self: start;
    margin: 0;
  }

  @media (min-width: 900px) {
    grid-area: 1 / 3 / 2 / 4;
  }

  @media (min-width: 1200px) {
    justify-self: end;
    grid-area: 1 / 3 / 2 / 5;
    margin: 0;
    width: 250px;
  }
`;

const DropDownContainer = styled("div")`
  width: 250px;
  margin: 0 auto;
  z-index: 10;
`;

const DropDownHeader = styled.div.attrs({
  tabIndex: 0,
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 50px;
  padding: 20px;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  border-radius: 6px;
  filter: drop-shadow(2px 2px 2px ${({ theme }) => theme.shadow});
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.background};
  /* padding-bottom: 5px; */
  box-sizing: border-box;
  border-radius: 4px;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  font-weight: 600;

  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
  list-style: none;
  height: 100%;
  width: 100%;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  cursor: pointer;
  background-color: ${({ theme }) => theme.background};
  &:hover {
    filter: brightness(80%);
  }
`;

const ItemButton = styled.button`
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const options = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const DropDown = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const region = useSelector(selectRegion);
  const filter = useSelector(selectFilter);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(filter);

  const toggling = () => setIsOpen(!isOpen);

  const togglingButton = (e: React.KeyboardEvent) => {
    if (e.charCode === 13 || e.keyCode === 13) {
      setIsOpen(!isOpen);
    }

    if (e.charCode === 27 || e.keyCode === 27) {
      setIsOpen(false);
    }
  };

  const onOptionClicked = (regionOption: string) => () => {
    dispatch(setRegion(regionOption));
    setIsOpen(false);
  };

  // useEffect(() => {
  //   setSearchParams({ region, filter });
  // }, [region, filter]);

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling} onKeyPress={togglingButton}>
          {region || "Filter by Region"}
          <IonIcon name="chevron-down-outline"></IonIcon>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option, index) => (
                <ListItem key={index}>
                  <ItemButton onClick={onOptionClicked(option)} key={index}>
                    {option}
                  </ItemButton>
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
});

export default DropDown;
