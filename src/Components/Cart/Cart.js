import React from "react";
// select cart data from store
import { useSelector } from "react-redux";
import { selectCart } from './cartSlice.js';

export const Cart = () => {

    // cart items
    const cart = useSelector(selectCart);

    return (
        <div data-testid='cart'> 
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