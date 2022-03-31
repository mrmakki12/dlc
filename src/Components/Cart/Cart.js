import React from "react";
// select cart data from store
import { useSelector } from "react-redux";
import { selectCart } from './cartSlice.js';
// components
import { CartItem } from '../CartItem/CartItem.js';

export const Cart = () => {

    // cart items
    const cart = useSelector(selectCart);

    return (
        <div data-testid='cart' className='container-fluid text-white bg-dark'> 
            {
                cart && cart.map(item => {
                    return (
                        <div>{item.name}: quantity: {item.quantity}</div>
                    )
                })
            }
        </div>
    )
}