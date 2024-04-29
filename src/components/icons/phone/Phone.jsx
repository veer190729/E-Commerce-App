import React from 'react'
import { NavLink } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Phone = () => {
  return (
    <NavLink to={"/phone"}><FontAwesomeIcon icon={faPhone} /></NavLink>
  )
}