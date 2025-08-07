import React from "react";

export default function Cart({ productsInCart, onShowCart }) {
  return (
    <section className="product-overlay">
      <button onClick={onShowCart} className="close-btn">
        Back To Shop
      </button>

      <ul>
        {productsInCart.map((product) => (
          <li key={product.id} className="cart-li">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <div>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Total: ${product.price * product.quantity}</p>
              <button>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <p className="total">
        Total: <button>Buy Now</button>
      </p>
    </section>
  );
}

