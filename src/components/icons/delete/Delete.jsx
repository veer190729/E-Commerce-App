import React from "react";
import { NavLink } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Delete = () => {
  return (
    <NavLink to={"/delete"}><FontAwesomeIcon icon={faTrash} /></NavLink>
  )
}