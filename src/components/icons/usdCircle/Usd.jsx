import React from "react";
import { NavLink } from "react-router-dom";
import { faUsd} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Usd = () => {
  return (
    <NavLink to={"/usd"}><FontAwesomeIcon icon={faUsd} /></NavLink>
  )
}