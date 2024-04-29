import React from "react";
import { NavLink } from "react-router-dom";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Sack = () => {
  return (
    <NavLink to={"/sackDoller"}><FontAwesomeIcon icon={faSackDollar} /></NavLink>
  )
}