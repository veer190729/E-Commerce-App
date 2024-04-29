import React from "react";
import "./Footer.css";
import { Facebook } from "../icons/facebook/Facebook";
import { Instagram } from "../icons/instagram/Instagram";
import { Linkdin } from "../icons/linkdin/Linkdin";
import { Twitter } from "../icons/twitter/Twitter";
import { Line } from "../line/Line";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="exclusive">
          <h2>Exclusive</h2>
          <p>Subscribe</p>
          <h6>Get 10% off your first order</h6>
          <div className="mail">
            <input type="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="support">
          <h2>Support</h2>
          <p>111 Bijay sarani, Dhaka,<br></br> DH 1515, Bangladesh</p>
          <p>exclusive@gmail.com</p>
          <p>017 123 456 789</p>
        </div>
        <div className="account">
          <h2>Account</h2>
          <ul>
            <li>My Account</li>
            <li>
              Login <span>/ Register</span>
            </li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="quickLink">
          <h2>Quick Links</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="social">
          <h2>Download App</h2>
          <p>Save $3 with App New User Only</p>
          <div>
            <img src="" alt="App Store" />
            <img src="" alt="Google Play" />
          </div>
          <div>
            <div className="socialIcons">
              <Facebook />
              <Instagram />
              <Twitter />
              <Linkdin />
            </div>
          </div>
        </div>
      </div>
      <div className="line">
        <Line />
      </div>
      <p className="copyRight">Copyright Rimel 2022. All right reserved</p>
    </footer>
  );
};

export default Footer;
