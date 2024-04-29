import React from "react";
import { NavLink } from "react-router-dom";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Instagram = () => {
  return (
    <NavLink to={"/instagram"}><FontAwesomeIcon icon={faInstagram} /></NavLink>
  )
}