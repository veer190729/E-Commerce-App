import React from "react";
import "./Language"
import "./Bar.css";
import { Language } from "./Language";
const Bar = () => {
  return (
    <div className="topHead">
        <div>
            <span className="leftSide">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span> 
            <span className="centre"> ShopNow</span>
            <span className="languageRightSide">
                <Language />
            </span>
        </div>
      </div>
  );
};

export default Bar;
