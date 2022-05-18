import React from "react";
import CountryCardDetails from "./CountryCardDetails";
import { useParams } from "react-router-dom";


export function DetailsView(props: any) {
  let { id } = useParams<"id">();
  let countryDetail = null;

  if (id) {
    countryDetail = props.getCountryNameByCca3(id);
  }
  if (!countryDetail)
    return <div>Country not found</div>;

  return <CountryCardDetails />;
}
