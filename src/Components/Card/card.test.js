import React from "react";
import { Card } from './Card.js';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../App/store.js';

afterEach(cleanup);

// basic render
test("render Card without crashing", () => {
    // sample data
    const data = {
        name: 'Hiking Simulator: Jungle Adventure',
        img: '/pictures/background.jpg',
        description: `Your on a mission to find the lost treasure of Atlantis with Nathan
        Drake. You get separated from each during a confrontation with Sully and Marlow. Find your way
        back!`,
        price: `free 99`
    }

    render(
        <Provider store={store}>
            <Card data={data} />
        </Provider>
    );
});

// snapshot
test("matches snapshot", () => {

    // sample data
    const data = {
        name: 'Hiking Simulator: Jungle Adventure',
        img: '/pictures/background.jpg',
        description: `Your on a mission to find the lost treasure of Atlantis with Nathan
        Drake. You get separated from each during a confrontation with Sully and Marlow. Find your way
        back!`,
        price: `free 99`
    }

    const tree = renderer.create(
        <Provider store={store}>
            <Card data={data} />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
