import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header.js';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

// cleanup
afterEach(cleanup);

// render Header 
test("renders Header without crashing", () => {
    const div  = document.createElement("div");
    ReactDOM.render(<Router><Header /></Router>, div)
});

// render Header
test("renders Header the right way", () => {
    const { getByTestId } = render(<Router><Header /></Router>);
    expect(getByTestId('header'));
});

// navigate to cart
test("navigate to Cart through user interaction", ()  => {
    // render header
    render(<Router><Header /></Router>);

    // click cart
    fireEvent.click(document.getElementsByTagName('i').item(0));

    // expect path to be cart
    expect(document.location.pathname).toBe('/cart');

});

// snapshot
test("matches snapshot", () => {
    const tree = renderer.create(<Router><Header /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
});
