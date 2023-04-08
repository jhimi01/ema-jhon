import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../PRoduct/Product";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleclearCart = () => {
    setCart([])
    deleteShoppingCart()
  };

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
    //  console.log('addedProduxt', addedProduct)
    }
    // step 5: set the cart
    setCart(savedCart)
  }, [products]);

 
  const handleAddToCart = (product) => {

    let newCart = [];
    const exists = cart.find(pd => pd.id === product.id);
    if (!exists) {
      product.quantity =1;
      newCart = [...cart, product]
    }
    else{
      product.quantity = product.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart = [...remaining, exists];
    }


    // const newcart = [...cart, product];
    setCart(newCart);
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
     <Cart cart={cart} handleclearCart={handleclearCart}>
     <Link to="/Orders">go to review page</Link>
     </Cart>
      </div>
    </div>
  );
};

export default Shop;
