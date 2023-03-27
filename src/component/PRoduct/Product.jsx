import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const{category, img, name, price, ratings, seller} = props.product;
    return (
        <div className='cards'>
         <div className='card-details'>
         <img src={img} alt="" />
          <h4>{name}</h4>
          <h5>Price: {price}$</h5>
          <p>Manufacturer: {seller}</p>
          <p>Ratings: {ratings} star</p>
         </div>
         <button>add to cart</button>
        </div>
    );
};

export default Product;