import React, { useState } from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import { handleInputChange, handleSubmit } from "./FormSignUp";
import signUpImage from "../../images/Cart.jpg";
import { Google } from "../../components/icons/google/Google";


export const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src={signUpImage} alt="Signup" />
      </div>
      <div className="signup-form">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <form onSubmit={(e) => handleSubmit(e, userDetails)}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={userDetails.name}
            onChange={(e) => handleInputChange(e, setUserDetails)}
          />
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
          <button type="submit" className="signup-button">
            Create Account
          </button>
          <button type="submit" className="google-signup-btn"><Google /></button>
          <div className="login-link">
            Already have an account? <NavLink to={"/login"}>Login </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
