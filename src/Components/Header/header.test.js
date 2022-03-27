import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header.js';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';


// cleanup
afterEach(cleanup);

// render Header 
it("renders Header without crashing", () => {
    const div  = document.createElement("div");
    ReactDOM.render(<Header />, div)
});

// render Header
it("renders Header the right way", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header'));
});

// snapshot
it("matches snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
});
