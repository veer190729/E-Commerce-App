import React from "react";
import { Delete } from "../../components/icons/delete/Delete.jsx";
import { Cart } from "../../components/icons/cart/Cart.jsx";

const ProductCard = ({ product }) => (
    <div className="product-card">
      <button className="delicon">
        <Delete />
      </button>
      <img src={product.image} alt={"product.title"} /> {/* Ensure the alt attribute is set to product.title */}
      <div className="product-info">
        <button className="button">
          <span className="facartshopping">
            <Cart /><span className="addcart">Add To Cart</span>
          </span>
        </button>
        <h3>{product.title}</h3> {/* Ensure the product title is being rendered here */}
        <div className="price">
          <span>{product.price}</span>
        </div>
      </div>
    </div>
  );

  export default ProductCard;