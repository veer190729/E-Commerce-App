import React from 'react'
import { NavLink } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Cart = () => {
  return (
    <NavLink to={"/cart"}><FontAwesomeIcon icon={faCartShopping} /></NavLink>
  )
}