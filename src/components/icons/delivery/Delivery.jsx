import React from "react";
import { NavLink } from "react-router-dom";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Delivery = () => {
  return (
    <NavLink to={"/delivery"}><FontAwesomeIcon icon={faTruck} /></NavLink>
  )
}