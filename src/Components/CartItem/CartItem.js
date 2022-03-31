import React from "react";
import { useDispatch } from "react-redux";
//remove / add to cart
import { removeFromCart, addToCart } from "../Cart/cartSlice";

export const CartItem = (props) => {

    // data
    const data = props.data;

    // dispatch action to store
    const dispatch = useDispatch();

    // add another
    const handleAddToCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(data));
    };

    // remove item
    const handleRemoveFromCart = (e) => {
        e.preventDefault();
        dispatch(removeFromCart(data));
    }

    return (
        <div className="d-flex">
            <div>
                <h2>{data.name}</h2>
                <p>Quantity: {data.quantity}</p>
            </div>
            <div className="d-flex flex-column">
                <button onClick={(e) => handleRemoveFromCart(e)}>-</button>
                <button onClick={(e) => handleAddToCart(e)}>+</button>
            </div>
        </div>
    )
}