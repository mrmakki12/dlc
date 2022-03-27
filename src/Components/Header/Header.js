import React from "react";

export const Header = () => {

    return (
        <div className="container-fluid" data-testid="header">
            <div className="d-flex justify-content-between">
                <div>
                    <p>GameStation Store</p>
                </div>
                <div>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
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