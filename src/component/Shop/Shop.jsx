import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
   

    return (
        <div className='shop-container'>
        <div className="produts-container">
 <h2>products container: {products.length}</h2>
        </div>
        <div className="cart-container">
            <h2>order summery</h2>
        </div>
            
        </div>
    );
};

export default Shop;