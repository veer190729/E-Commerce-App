import React from "react";
import { NavLink } from "react-router-dom";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Customer = () => {
  return (
    <NavLink to={"/customer"}><FontAwesomeIcon icon={faHeadphones} /></NavLink>
  )
}