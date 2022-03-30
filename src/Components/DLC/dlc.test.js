import React from "react";
import ReactDOM from 'react-dom';
import { DLC } from './DLC.js';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
// redux
import { Provider } from 'react-redux';
import { store } from '../../App/store.js';

// cleanup
afterEach(cleanup);

// basic render 
test('renders DLC without crashing', () => {
    render(<Provider store={store}><DLC /></Provider>);
});

// advanced render
test('renders DLC completely', () => {
    render(<Provider store={store} ><DLC /></Provider>
    );

    // best sellers header
    screen.getByText('Best Sellers');

    // renders 9 dlc
    const dlcs = screen.queryAllByText(/Hiking Simulator/i).length;
    expect(dlcs).toBe(9);
});
 
