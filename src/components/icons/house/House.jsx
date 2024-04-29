import React from "react";
import { NavLink } from "react-router-dom";
import { faHouse} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const House = () => {
  return (
    <NavLink to={"/house"}><FontAwesomeIcon icon={faHouse} /></NavLink>
  )
}