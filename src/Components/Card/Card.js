import React from "react";

export const Card = ({data}) => {

    return (
        <div className="col" data-testid='card'>
            <div className="card text-white bg-dark">
                <img className="card-img-top" src={data.img} alt={data.title}/>
                <div className="card-body">
                    <h4 className="card-title">{data.name}</h4>
                    <b><p className="card-text">${data.price}</p></b>
                </div>
            </div>
        </div>
    )
}