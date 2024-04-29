import React from 'react'
import { NavLink } from "react-router-dom";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Facebook = () => {
  return (
    <NavLink to={"/facebook"}><FontAwesomeIcon icon={faFacebook} /></NavLink>
  )
}