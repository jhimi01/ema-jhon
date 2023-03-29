import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // console.log(cart)
    
    let Total =0;
    let TotalShipping =0;
    let quantity = 0;
    for(const product of cart) {
        // product.quantity = product.quantity || 1;
        Total = Total + product.price * product.quantity;
        TotalShipping = TotalShipping + product.shipping;
        quantity = quantity + product.quantity;
        // console.log(Total)
    }

    const Tax = Total*7/100;
    const grandtotal = Total+ Tax + TotalShipping;

    return (
        <div className='cart'>
             <h2>order summery</h2>
      <p>selected item: {quantity}</p>
      <p>Total price: ${Total}</p>
      <p>Total Shipping:{TotalShipping}</p>
      <p>Tax: ${Tax.toFixed(2)}</p>
    <h4>Grand Total: ${grandtotal}</h4>
        </div>
    );
};

export default Cart;