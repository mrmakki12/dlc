import React from "react";
// redux
import { useDispatch } from "react-redux";

export const Card = ({data}) => {

    // add to cart
    const dispatch = useDispatch();


    return (
        <div className="col" data-testid='card' onClick={() => {}}>
            <div className="card text-white bg-dark">
                <img className="card-img-top" src={data.img} alt={data.title}/>
                <div className="card-body">
                    <h4 className="card-title">{data.name}</h4>
                    <b><p className="card-text">${data.price}</p></b>
                </div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    More info
                </button>

            </div>
        </div>
    )
}