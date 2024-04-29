import React from "react";
import { Carousel } from "../../components/carousel/Carousel";
import { useCarousel } from "../../components/carousel/CarouselLogic";
import { useHome } from "./useHome";
// import Wishlist from "../wishlist/Wishlist.jsx";
import oppo from "../../images/opposale.jpg";
import flash from "../../images/flashsale.jpg";
import diwali from "../../images/diwali.jpg";
import women from "../../images/women.jpg";
import iphone from "../../images/iphone.jpg";
import "./Home.css";

export const Home = () => {
  const {
    showWomenFashion,
    showMenFashion,
    handleWomenFashionClick,
    handleMenFashionClick,
  } = useHome();

  const images = [iphone, diwali, women, flash, oppo];
  const { currentIndex, goToSlide } = useCarousel(images);

  return (
    <div className="container">
      <nav className="sidebar">
        <ul className="navigation-list">
          <li className="navigation-item">
            Woman's Fashion
            <button
              className={`listarrow ${showWomenFashion ? "down" : "right"}`}
              onClick={handleWomenFashionClick}
            ></button>
          </li>
          {showWomenFashion && (
            <div className="fashion-box">
              <ul>
                <li>Dresses</li>
                <li>Shoes</li>
                <li>Accessories</li>
              </ul>
            </div>
          )}
          <li className="navigation-item">
            Men's Fashion
            <button
              className={`listarrow ${showMenFashion ? "down" : "right"}`}
              onClick={handleMenFashionClick}
            ></button>
          </li>
          {showMenFashion && (
            <div className="fashion-box">
              <ul>
                <li>Dresses</li>
                <li>Shoes</li>
                <li>Accessories</li>
              </ul>
            </div>
          )}
          <li className="navigation-item">Electronics</li>
          <li className="navigation-item">Home & Lifestyle</li>
          <li className="navigation-item">Medicine</li>
          <li className="navigation-item">Sports & Outdoor</li>
          <li className="navigation-item">Body's Outdoor</li>
          <li className="navigation-item">Groceries & Pets</li>
          <li className="navigation-item">Health & Beauty</li>
        </ul>
      </nav>
      <Carousel
          images={images}
          currentIndex={currentIndex}
          goToSlide={goToSlide}
        />
        {/* <Wishlist /> */}
    </div>
  );
};
