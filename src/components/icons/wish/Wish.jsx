import React from 'react'
import { NavLink } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wish = () => {
  return (
    <NavLink to={"/wishlist"}><FontAwesomeIcon icon={faHeart} /></NavLink>
  )
}