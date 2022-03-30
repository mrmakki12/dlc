import React from "react";
import { dlcs } from '../../static/dlc-data.js';
// components 
import { Card } from '../Card/Card.js';

export const DLC = () => {

    return (
        <div data-testid='dlc'>
            <div className="container-fluid g-3 bg-dark text-white py-5 ">
                <h3 className="ps-5 offset-1">Best Sellers</h3>
            </div>
            <div className="album bg-dark text-white ">
                <div className="container">
                    <div className="row rows-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
                        {
                            dlcs.map((dlc, i) => {
                                return (
                                    <Card key={i} data={dlc} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}