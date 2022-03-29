import React from "react";
import { dlcs } from '../../static/dlc-data.js';

export const DLC = () => {

    return (
        <div>
            <div>
                <h3>Best Sellers</h3>
            </div>
            <div>
                {
                    dlcs.map((dlc, i) => {
                        return (
                            <div key={i}>
                                {dlc.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}