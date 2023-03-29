import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../PRoduct/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get the addedProduct
    for (const id in storedCart) {
    //  console.log(id)
     const addedProduct = products.find(product => product.id === id)
     if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct)
      
    }
     console.log('addedProduxt', addedProduct)
    }
    // step 5: set the cart
    setCart(savedCart)
  }, [products]);

 
  const handleAddToCart = (product) => {
    const newcart = [...cart, product];
    setCart(newcart);
    addToDb(product.id)

  };

  return (
    <div className="shop-container">
      <div className="produts-container">
        <div className="proucts-parent">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
      </div>
      <div className="cart-container">
     <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
