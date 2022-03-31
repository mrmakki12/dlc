import React from "react";
import { Cart } from './Cart.js';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// redux
import { Provider } from 'react-redux';
import { store } from '../../App/store.js';

afterEach(cleanup);

// basic render
test('renders Cart without crashing', () => {
    render(<Provider store={store}><Cart /></Provider>);
});