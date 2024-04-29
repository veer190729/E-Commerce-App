import React from 'react'
import { NavLink } from "react-router-dom";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Twitter = () => {
  return (
    <NavLink to={"/twitter"}><FontAwesomeIcon icon={faTwitter} /></NavLink>
  )
}