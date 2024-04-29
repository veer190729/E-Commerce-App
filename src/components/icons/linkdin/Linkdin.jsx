import React from 'react'
import { NavLink } from "react-router-dom";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Linkdin = () => {
  return (
    <NavLink to={"/linkdin"}><FontAwesomeIcon icon={faLinkedin} /></NavLink>
  )
}