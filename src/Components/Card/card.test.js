import React from "react";
import { Card } from './Card.js';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
// redux
import { Provider } from 'react-redux';
import { store } from '../../App/store.js';

afterEach(cleanup);

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
test("render Card without crashing", () => {

    render(
        <Provider store={store}>
            <Card data={sampleData()} />
        </Provider>
    );
});

// snapshot
test("matches snapshot", () => {

    const tree = renderer.create(
        <Provider store={store}>
            <Card data={sampleData()} />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
