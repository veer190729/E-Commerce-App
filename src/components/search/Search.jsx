import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Search = () => {
  return (
    <div className="searchContainer">
      <input type="text" placeholder="What are you looking for?" /><FontAwesomeIcon icon={faSearch} className="faSearch" />
    </div>
  );
};
