import React from "react";
// redux
import { useDispatch } from "react-redux";
// add to cart
import { addToCart } from "../Cart/cartSlice";

export const Card = (props) => {

    // data
    const data = props.data;


    // add to cart
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(data));
    }


    return (
        <div className="col" data-testid='card'>
            <div className="card text-white bg-dark">
                <img className="card-img-top" src={data.img} alt={data.title}/>
                <div className="card-body">
                    <h4 className="card-title">{data.name}</h4>
                    <b><p className="card-text">${data.price}</p></b>
                </div>
                <button type="button" id='atc' className="btn btn-primary" onClick={(e) => handleAddToCart(e)}>
                    Add To Cart
                </button>
            </div>
        </div>
    )
}