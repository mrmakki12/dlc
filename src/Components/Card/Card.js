import React from "react";

export const Card = ({data}) => {
    return (
        <div className="col" data-testid='card'>
            <div className="card text-dark">
                <img className="card-img-top" src={data.img} />
                <div className="card-body">
                    <h4 className="card-title">{data.title}</h4>
                    <p className="card-text">{data.description}</p>
                    <b><p className="card-text">${data.price}</p></b>
                </div>
            </div>
        </div>
    )
}