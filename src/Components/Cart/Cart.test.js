import React from "react";
import { Cart } from './Cart.js';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


afterEach(cleanup);

// basic render
test('renders Cart without crashing', () => {
    render(<Cart />)
});