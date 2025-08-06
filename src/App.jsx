import "./App.css";
import React, { useState } from "react";

import Header from "./components/Header.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";
import CartButton from "./components/CartButton.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [productsInCart, setProductsInCart] = useState([]);

  function showCart() {
    setCartIsShown(prevState => !prevState);
  }

  function handleAddToCart(product) {
    setProductsInCart(prevState => [ {...product,quantity:1} , ...prevState]);
  }

  return (
    <>
      <Header />
      <CartButton onShowCart={showCart} />
      {cartIsShown ? (
        <Cart onShowCart={showCart} productsInCart={productsInCart} />
      ) : (
        <Products onAddItemToCart={handleAddToCart} />
      )}
      <Footer />
    </>
  );
}

export default App;

