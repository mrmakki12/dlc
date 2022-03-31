import React from "react";
import { CartItem } from './CartItem.js';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// redux
import { Provider } from 'react-redux';
import { store } from '../../App/store.js';

afterEach(cleanup);

// sample data
const sampleData = () => {
    return {
        name: 'Hiking Simulator: Jungle Adventure',
        img: '/pictures/background.jpg',
        description: `Your on a mission to find the lost treasure of Atlantis with Nathan
        Drake. You get separated from each during a confrontation with Sully and Marlow. Find your way
        back!`,
        price: `99`
    }
}

// basic render
test("render Cart Item without crashing", () => {
    render(
        <Provider store={store}>
            <CartItem data={sampleData}/>
        </Provider>
    )
});