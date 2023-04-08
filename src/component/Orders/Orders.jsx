import React, { useState } from 'react';
import Cart from '../Cart/Cart'
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    

    const handleRemoveFromCart = (id) => {
        const remaing = cart.filter(product=>product.id !== id)
        setCart(remaing)
        removeFromDb(id)

        console.log(remaing)
    };


    return (
        <div className='shop-container'>
            <div className='produts-container'>
               {cart.map(product => <ReviewItem key={product.id} product={product}
               handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)}
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;