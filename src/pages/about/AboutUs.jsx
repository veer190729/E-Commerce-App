import React from "react";
import "./AboutUs.css";
import signUpImage from "../../images/AboutUs.jpg";
import tomCruise from "../../images/Tom-Cruise.jpeg";
import emmawatson from "../../images/Emma-Watson.jpg";
import anadearmas from "../../images/Ana de Armas.jpg";
import { Twitter } from "../../components/icons/twitter/Twitter";
import { Instagram } from "../../components/icons/instagram/Instagram";
import { Linkdin } from "../../components/icons/linkdin/Linkdin";
import { Usd } from "../../components/icons/usdCircle/Usd";
import { Sack } from "../../components/icons/sackDoller/Sack";
import { ShoppingBag } from "../../components/icons/shoppingBag/ShoppingBag";
import { House } from "../../components/icons/house/House";
import { Delivery } from "../../components/icons/delivery/Delivery";
import { Customer } from "../../components/icons/customer/Customer";
export const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="story">
        <div className="content">
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region. <br /> <br /> <br /> Exclusive has more than 1
            Million products to offer, growing at a very fast. Exclusive offers
            a diverse assotment in categories ranging from consumer.
          </p>
        </div>
        <div className="story-image">
          <img src={signUpImage} alt="img" />
        </div>
      </div>
      <div className="statistics">
        <div className="stat-item">
          <span className="icon"><House /></span>
          <h1>10.5k</h1>
          <p>Sellers active on our site</p>
        </div>
        <div className="stat-item">
          <span className="icon"><Usd /></span>
          <h1>33.6k</h1>
          <p>Sellers active on our site</p>
        </div>
        <div className="stat-item">
          <span className="icon"><ShoppingBag /></span>
          <h1>45.5k</h1>
          <p>Sellers active on our site</p>
        </div>
        <div className="stat-item">
          <span className="icon"><Sack /></span>
          <h1>25.5k</h1>
          <p>Sellers active on our site</p>
        </div>
      </div>
      <div className="team">
        <div className="team-member">
        <img src={emmawatson} alt="img" />
          <h3>Emma Watson</h3>
          <p>Managing Director</p>
          <div className="teamSocialIcons">
            <Twitter />
            <Instagram />
            <Linkdin />
          </div>
        </div>
        <div className="team-member">
          <img src={tomCruise} alt="img" />
          <h3>Tom Cruise</h3>
          <p>Founder & Chairman</p>
          <div className="teamSocialIcons">
            <Twitter />
            <Instagram />
            <Linkdin />
          </div>
        </div>
        <div className="team-member">
          <img src={anadearmas} alt="Tom Cruise" />
          <h3>Ana de Armas</h3>
          <p>Product Designer</p>
          <div className="teamSocialIcons">
            <Twitter />
            <Instagram />
            <Linkdin />
          </div>
        </div>
      </div>
      <div className="services">
        <div className="service-item">
          <span className="serviceicon"><Delivery /></span>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="service-item">
          <span className="serviceicon"><Customer /></span>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="service-item">
          <span className="serviceicon"><Delivery /></span>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};
