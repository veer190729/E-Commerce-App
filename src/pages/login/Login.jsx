import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { handleInputChange, handleSubmit } from "./FormLogin";
import loginImage from "../../images/Cart.jpg";

export const Login = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={loginImage} alt="Signup" />
      </div>
      <div className="login-form">
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>
        <form onSubmit={(e) => handleSubmit(e, userDetails)}>
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Phone Number"
            value={userDetails.emailOrPhone}
            onChange={(e) => handleInputChange(e, setUserDetails)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={(e) => handleInputChange(e, setUserDetails)}
          />
          <div className="log-link">
          <button type="submit" className="login-button">
            Log In
          </button>
          <NavLink to={"/"}>Forgot Password ? </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
