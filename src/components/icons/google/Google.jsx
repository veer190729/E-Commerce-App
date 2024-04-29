import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export const Google = () => {
  return (
    <NavLink to="/signup" className="google-signup-btn">
      <FontAwesomeIcon icon={faGoogle} /> Sign up with Google
    </NavLink>
  );
};
