import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {

    return (
        <div className="container-fluid" data-testid="header">
            {/* Store header */}
            <div className="d-flex justify-content-between align-items-center">
                <div style={{ height: 'fitContent'}}>
                    <p>GameStation Store</p>
                </div>
                <Link to='/cart'>
                    <div title="cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </Link>
            </div>
            {/* Game header */}
            <div className=" text-white bg-dark row py-lg-4">
                {/* <img src="background.jpg" /> */}
                <div className="">
                    <h1 className="">Hiking Simulator</h1>
                    <h2 className="c">Add-Ons</h2>
                </div>
            </div>
        </div>
    )
}