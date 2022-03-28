import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header.js';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';


// cleanup
afterEach(cleanup);

// render Header 
test("renders Header without crashing", () => {
    const div  = document.createElement("div");
    ReactDOM.render(<Header />, div)
});

// render Header
test("renders Header the right way", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header'));
});

// snapshot
test("matches snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
});
