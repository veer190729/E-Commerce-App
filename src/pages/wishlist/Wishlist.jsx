import React, { useEffect, useState } from "react";
import "./Wishlist.css";
import ProductCard from "../../pages/wishlist/ProductCart.jsx";

const Wishlist = () => {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [allWishlistProducts, setAllWishlistProducts] = useState([]);
  const [wishlistDisplayCount, setWishlistDisplayCount] = useState(4);

  const [justForYouProducts, setJustForYouProducts] = useState([]);
  const [allJustForYouProducts, setAllJustForYouProducts] = useState([]);
  const [justForYouDisplayCount, setJustForYouDisplayCount] = useState(4);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setAllWishlistProducts(data);
        setWishlistProducts(data.slice(0, wishlistDisplayCount));
        setAllJustForYouProducts(data);
        setJustForYouProducts(data.slice(0, justForYouDisplayCount));
      })
      .catch((error) => console.error("Error:", error));
  }, [wishlistDisplayCount, justForYouDisplayCount]);

  const handleSeeAllClick = () => {
    if (justForYouProducts.length === allJustForYouProducts.length) {
      setJustForYouDisplayCount(4); // reset to initial count
    } else {
      setJustForYouDisplayCount(allJustForYouProducts.length); // show all products
    }
  };

  return (
    <div className="wishlist">
      <div className="header-content">
        <h1>Wishlist ({wishlistProducts.length})</h1>
        <button className="move-all">Move All To Bag</button>
      </div>
      <div className="product-list">
        {wishlistProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="justforyou">
        <h1>Just For You ({justForYouProducts.length})</h1>
        <button className="see-all" onClick={handleSeeAllClick}>
          {justForYouProducts.length === allJustForYouProducts.length
            ? "See Less"
            : "See All"}
        </button>
      </div>
      <div className="product-list">
        {justForYouProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;