import React, { useState } from "react";
import products from "../assets/products";
import Sort from "./Sort";
import { ImOffice } from "react-icons/im";
import ProductDetails from "./ProductDetails";

function Products({onAddItemToCart}) {
  const [items, setItems] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleProductSelect(product) {
    setSelectedProduct(product);
  }
  function closeModal() {
    setSelectedProduct(null);
  }

  function handleSort(method) {
    let sortedItems = [...items];
    switch (method) {
      case "a-to-z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-to-a":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-up":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "price-down":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setItems(sortedItems);
  }

  function addProductToCart(product) {
    onAddItemToCart(product)
    console.log(product);
  }

  return (
    <>
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} onCloseModal={closeModal} onAddToCart={addProductToCart} />
      ) : (
        <main>
          <h2>Check out our Offer👇</h2>
          <Sort onSort={handleSort} />
          <ul className="main-ul">
            {items.map((product) => (
              <li
                key={product.id}
                className={product.onSale ? "on-sale" : ""}
                onClick={() => handleProductSelect(product)}
              >
                <img src={product.image} alt={product.name} />
                <div>
                  <p>{product.name}</p>
                  <p className="price">${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </main>
      )}
    </>
  );
}

export default Products;
