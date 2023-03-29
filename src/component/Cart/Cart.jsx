import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // console.log(cart)
    
    let Total =0;
    let TotalShipping =0;
    for(const product of cart) {
        Total = Total + product.price;
        TotalShipping = TotalShipping + product.shipping;
        // console.log(Total)
    }

    const Tax = Total*7/100;
    const grandtotal = Total+ Tax + TotalShipping;

    return (
        <div className='cart'>
             <h2>order summery</h2>
      <p>selected item: {cart.length}</p>
      <p>Total price: ${Total}</p>
      <p>Total Shipping:{TotalShipping}</p>
      <p>Tax: ${Tax.toFixed(2)}</p>
    <h4>Grand Total: ${grandtotal}</h4>
        </div>
    );
};

export default Cart;