import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faTrashAlt, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Cart = ({cart, handleclearCart, children}) => {
    let Total =0;
    let TotalShipping =0;
    let quantity = 0;
    for(const product of cart) {
        Total = Total + product.price * product.quantity;
        TotalShipping = TotalShipping + product.shipping;
        quantity = quantity + product.quantity;
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
   <button onClick={handleclearCart} style={{width:'100%', marginBottom:'15px'}}>clear cart
   <FontAwesomeIcon style={{marginLeft:'15px'}}  icon={faTrashAlt}/>
   </button>
   {/* <button style={{width:'100%'}}>
   <FontAwesomeIcon  style={{marginLeft:'15px'}} icon={faDashboard}/><Link to='/checkout'>checkout</Link></button> */}
        {children}
        </div>
    );
};

export default Cart;