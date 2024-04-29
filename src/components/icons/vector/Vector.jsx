import React from 'react'
import { NavLink } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Vector = () => {
  return (
    <NavLink to={"/vector"}><FontAwesomeIcon icon={faSearch} /></NavLink>
  )
}