import React from "react";
import { NavLink } from "react-router-dom";
import { Search } from "../search/Search";
import "./Header.css";
import { Wish } from "../icons/wish/Wish";
import { Cart } from "../icons/cart/Cart";
import { User } from "../icons/user/User";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbarBrand">Exclusive</div>
        <ul className="navMenu">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/aboutus"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/signup"}>SignUp</NavLink>
          </li>
        </ul>
        <div className="rightSection">
          <Search />
          <Wish />
          <Cart />
          <User />
        </div>
      </nav>
    </>
  );
};

export default Header;
