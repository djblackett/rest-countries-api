import React from "react";
import { useSearchParams, setSearchParams } from "react-router-dom";
import styled from "styled-components";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropDown from './DropDown';
// import Item from 'react-bootstrap/Dropdown/Item';


export const RegionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  grid-area: 2 / 1 / 3 / 2;
  justify-self: start;
  align-self: center;
  text-align: end;
  font-size: 18px;
  font-weight: bold;
  margin: 0 5%;
  width: 55%;
  filter: drop-shadow(3px 3px 3px black);
  max-height: 50px;
  position: relative;

  @media (min-width: 1200px) {
    grid-area: 1 / 3 / 2 / 5;
    align-self: flex-start;
    justify-self: end;
    margin: 0;
    width: auto;
  }
`;

const DropDown1 = styled.select.attrs({
  name: "region",
  id: "region",
  defaultValue: "Filter by Region",
  size: '15',
})`
  width: 100%;
  font-size: 18px;
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.text};
  border: none;
  border-radius: 6px;
  height: 50px;
  padding: 0 10px;
  outline: none;
`;

const Option = styled.option`
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.text};
    outline: none;
    font-size: inherit;
    font: inherit;
    /* border: 5px solid black; */
`

const regionOptions = [
  {
  key: 'Africa',
  text: 'Africa',
  value: 'Africa',
  },
  {
  key: 'Americas',
  text: 'Americas',
  value: 'Americas',
  },
  {
  key: 'Asia',
  text: 'Asia',
  value: 'Asia',
  },
  {
  key: 'Europe',
  text: 'Europe',
  value: 'Europe',
  },
  {
  key: 'Oceania',
  text: 'Oceania',
  value: 'Oceania',
  }
];

const DropdownExampleSelection = () => (
  <Dropdown
    placeholder='Filter by Region'
    fluid
    selection
    options={regionOptions}
  />
)

function RegionDropDown() {

  // todo make the drop down from scratch so I can style it correctly
  let [searchParams, setSearchParams] = useSearchParams();

  function handleChange(event) {
    let region = event.target.value;

    if (region && region !== "Filter by Region") {
      setSearchParams({ region });
    } else {
      setSearchParams({});
    }
  }

  return (<DropDown />);
}
    

{/* //     <div class="ui selection dropdown">
//   <input type="hidden" name="region" />
//   <i class="dropdown icon"></i>
//   <div class="default text">Filter by Region</div>
//   <div class="scrollhint menu">
//     <div class="item" data-value="0">All</div>
//     <div class="item" data-value="1">Africa</div>
//     <div class="item" data-value="2">Americas</div>
//     <div class="item" data-value="3">Asia</div>
//     <div class="item" data-value="4">Europe</div>
//     <div class="item" data-value="5">Oceania</div>
//   </div>
// </div> */}







export default RegionDropDown;


/* <DropDown onChange={handleChange}>
        <Option value="Filter by Region">Filter by Region</Option>

        <Option value="Africa">Africa</Option>
        <Option value="Americas">Americas</Option>
        <Option value="Asia">Asia</Option>
        <Option value="Europe">Europe</Option>
        <Option value="Oceania">Oceania</Option>
      </DropDown> */ 