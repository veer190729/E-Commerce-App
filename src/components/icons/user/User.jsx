import React from "react";
import { NavLink } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const User = () => {
  return (
    <NavLink to={"/user"}><FontAwesomeIcon icon={faUser} /></NavLink>
  )
}