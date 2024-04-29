import React from 'react'
import { NavLink } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Email = () => {
  return (
    <NavLink to={"/email"}><FontAwesomeIcon icon={faEnvelope} /></NavLink>
  )
}