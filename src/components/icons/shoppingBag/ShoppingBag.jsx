import React from "react";
import { NavLink } from "react-router-dom";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ShoppingBag = () => {
  return (
    <NavLink to={"/shoppingbag"}><FontAwesomeIcon icon={faShoppingBag} /></NavLink>
  )
}