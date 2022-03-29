import React from "react";
import ReactDOM from 'react-dom';
import { Cart } from './Cart.js';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

// basic render
test('renders Cart without crashing', () => {
    render(<Cart />)
});